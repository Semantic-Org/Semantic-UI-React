import EventStack from '@semantic-ui-react/event-stack'
import cx from 'classnames'
import _ from 'lodash'
import PropTypes from 'prop-types'
import React, { Component, createRef } from 'react'
import { Popper } from 'react-popper'

import {
  eventStack,
  childrenUtils,
  customPropTypes,
  getElementType,
  getUnhandledProps,
  makeDebugger,
  SUI,
  useKeyOnly,
  useKeyOrValueAndKey,
} from '../../lib'
import Portal from '../../addons/Portal'
import Ref from '../../addons/Ref'
import { placementMapping, positions, positionsMapping } from './lib/positions'
import createReferenceProxy from './lib/createReferenceProxy'
import PopupContent from './PopupContent'
import PopupHeader from './PopupHeader'

const debug = makeDebugger('popup')

/**
 * A Popup displays additional information on top of a page.
 */
export default class Popup extends Component {
  static propTypes = {
    /** An element type to render as (string or function). */
    as: customPropTypes.as,

    /** Display the popup without the pointing arrow. */
    basic: PropTypes.bool,

    /** Primary content. */
    children: PropTypes.node,

    /** Additional classes. */
    className: PropTypes.string,

    /** Simple text content for the popover. */
    content: customPropTypes.itemShorthand,

    /** Existing element the pop-up should be bound to. */
    context: PropTypes.oneOfType([PropTypes.object, customPropTypes.refObject]),

    /** A disabled popup only renders its trigger. */
    disabled: PropTypes.bool,

    /** A flowing Popup has no maximum width and continues to flow to fit its content. */
    flowing: PropTypes.bool,

    /** Takes up the entire width of its offset container. */
    // TODO: implement the Popup fluid layout
    // fluid: PropTypes.bool,

    /** Header displayed above the content in bold. */
    header: customPropTypes.itemShorthand,

    /** Hide the Popup when scrolling the window. */
    hideOnScroll: PropTypes.bool,

    /** Whether the popup should not close on hover. */
    hoverable: PropTypes.bool,

    /** Invert the colors of the Popup. */
    inverted: PropTypes.bool,

    /** Offset value to apply to rendered popup. Accepts the following units:
     * - px or unit-less, interpreted as pixels
     * - %, percentage relative to the length of the trigger element
     * - %p, percentage relative to the length of the popup element
     * - vw, CSS viewport width unit
     * - vh, CSS viewport height unit
     */
    offset: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),

    /** Events triggering the popup. */
    on: PropTypes.oneOfType([
      PropTypes.oneOf(['hover', 'click', 'focus']),
      PropTypes.arrayOf(PropTypes.oneOf(['hover', 'click', 'focus'])),
    ]),

    /**
     * Called when a close event happens.
     *
     * @param {SyntheticEvent} event - React's original SyntheticEvent.
     * @param {object} data - All props.
     */
    onClose: PropTypes.func,

    /**
     * Called when the portal is mounted on the DOM.
     *
     * @param {null}
     * @param {object} data - All props.
     */
    onMount: PropTypes.func,

    /**
     * Called when an open event happens.
     *
     * @param {SyntheticEvent} event - React's original SyntheticEvent.
     * @param {object} data - All props.
     */
    onOpen: PropTypes.func,

    /**
     * Called when the portal is unmounted from the DOM.
     *
     * @param {null}
     * @param {object} data - All props.
     */
    onUnmount: PropTypes.func,

    /** Position for the popover. */
    position: PropTypes.oneOf(positions),

    /** Popup size. */
    size: PropTypes.oneOf(_.without(SUI.SIZES, 'medium', 'big', 'massive')),

    /** Custom Popup style. */
    style: PropTypes.object,

    /** Element to be rendered in-place where the popup is defined. */
    trigger: PropTypes.node,

    /** Popup width. */
    wide: PropTypes.oneOfType([PropTypes.bool, PropTypes.oneOf(['very'])]),
  }

  static defaultProps = {
    disabled: false,
    offset: 0,
    on: 'hover',
    position: 'top left',
  }

  static Content = PopupContent
  static Header = PopupHeader

  state = {}
  triggerRef = createRef()

  static getDerivedStateFromProps(props, state) {
    if (state.closed || state.disabled) return {}

    const unhandledProps = getUnhandledProps(Popup, props)
    const contentRestProps = _.reduce(
      unhandledProps,
      (acc, val, key) => {
        if (!_.includes(Portal.handledProps, key)) acc[key] = val

        return acc
      },
      {},
    )
    const portalRestProps = _.pick(unhandledProps, Portal.handledProps)

    return { contentRestProps, portalRestProps }
  }

  componentWillUnmount() {
    clearTimeout(this.timeoutId)
  }

  getPortalProps = () => {
    debug('getPortalProps()')
    const portalProps = {}

    const { on, hoverable } = this.props
    const normalizedOn = _.isArray(on) ? on : [on]

    if (hoverable) {
      portalProps.closeOnPortalMouseLeave = true
      portalProps.mouseLeaveDelay = 300
    }
    if (_.includes(normalizedOn, 'click')) {
      portalProps.openOnTriggerClick = true
      portalProps.closeOnTriggerClick = true
      portalProps.closeOnDocumentClick = true
    }
    if (_.includes(normalizedOn, 'focus')) {
      portalProps.openOnTriggerFocus = true
      portalProps.closeOnTriggerBlur = true
    }
    if (_.includes(normalizedOn, 'hover')) {
      portalProps.openOnTriggerMouseEnter = true
      portalProps.closeOnTriggerMouseLeave = true
      // Taken from SUI: https://git.io/vPmCm
      portalProps.mouseLeaveDelay = 70
      portalProps.mouseEnterDelay = 50
    }

    return portalProps
  }

  hideOnScroll = (e) => {
    debug('hideOnScroll()')
    this.setState({ closed: true })

    eventStack.unsub('scroll', this.hideOnScroll, { target: window })
    this.timeoutId = setTimeout(() => {
      this.setState({ closed: false })
    }, 50)

    this.handleClose(e)
  }

  handleClose = (e) => {
    debug('handleClose()')
    _.invoke(this.props, 'onClose', e, this.props)
  }

  handleOpen = (e) => {
    debug('handleOpen()')
    _.invoke(this.props, 'onOpen', e, this.props)
  }

  handlePortalMount = (e) => {
    debug('handlePortalMount()')
    _.invoke(this.props, 'onMount', e, this.props)
  }

  handlePortalUnmount = (e) => {
    debug('handlePortalUnmount()')
    _.invoke(this.props, 'onUnmount', e, this.props)
  }

  renderContent = ({ placement: popperPlacement, ref: popperRef, style: popperStyle }) => {
    const {
      basic,
      children,
      className,
      content,
      hideOnScroll,
      flowing,
      header,
      inverted,
      size,
      style,
      wide,
    } = this.props
    const { contentRestProps } = this.state

    const classes = cx(
      'ui',
      placementMapping[popperPlacement],
      size,
      useKeyOrValueAndKey(wide, 'wide'),
      useKeyOnly(basic, 'basic'),
      useKeyOnly(flowing, 'flowing'),
      useKeyOnly(inverted, 'inverted'),
      'popup transition visible',
      className,
    )
    const ElementType = getElementType(Popup, this.props)
    const styles = {
      // Heads up! We need default styles to get working correctly `flowing`
      left: 'auto',
      right: 'auto',
      ...popperStyle,
      ...style,
    }

    return (
      <Ref innerRef={popperRef}>
        <ElementType {...contentRestProps} className={classes} style={styles}>
          {childrenUtils.isNil(children) ? (
            <React.Fragment>
              {PopupHeader.create(header, { autoGenerateKey: false })}
              {PopupContent.create(content, { autoGenerateKey: false })}
            </React.Fragment>
          ) : (
            children
          )}
          {hideOnScroll && <EventStack on={this.hideOnScroll} name='scroll' target='window' />}
        </ElementType>
      </Ref>
    )
  }

  render() {
    const { context, disabled, offset, position, trigger } = this.props
    const { closed, portalRestProps } = this.state

    if (closed || disabled) return trigger

    const modifiers = {
      arrow: { enabled: false },
      offset: { offset },
    }
    const referenceElement = createReferenceProxy(_.isNil(context) ? this.triggerRef : context)

    const mergedPortalProps = { ...this.getPortalProps(), ...portalRestProps }
    debug('portal props:', mergedPortalProps)

    return (
      <Portal
        {...mergedPortalProps}
        onClose={this.handleClose}
        onMount={this.handlePortalMount}
        onOpen={this.handleOpen}
        onUnmount={this.handlePortalUnmount}
        trigger={trigger}
        triggerRef={this.triggerRef}
      >
        <Popper
          modifiers={modifiers}
          placement={positionsMapping[position]}
          referenceElement={referenceElement}
        >
          {this.renderContent}
        </Popper>
      </Portal>
    )
  }
}
