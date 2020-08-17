import EventStack from '@semantic-ui-react/event-stack'
import { Ref } from '@fluentui/react-component-ref'
import cx from 'clsx'
import _ from 'lodash'
import PropTypes from 'prop-types'
import React, { Component, createRef } from 'react'
import { Popper } from 'react-popper'
import shallowEqual from 'shallowequal'

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
import { placementMapping, positions, positionsMapping } from './lib/positions'
import createReferenceProxy from './lib/createReferenceProxy'
import PopupContent from './PopupContent'
import PopupHeader from './PopupHeader'

const debug = makeDebugger('popup')

/**
 * A Popup displays additional information on top of a page.
 */
export default class Popup extends Component {
  state = {}

  open = false
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

  componentDidUpdate(prevProps) {
    const depsEqual = shallowEqual(this.props.popperDependencies, prevProps.popperDependencies)

    if (!depsEqual) {
      this.handleUpdate()
    }
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
    if (_.includes(normalizedOn, 'hover')) {
      portalProps.openOnTriggerClick = false
      portalProps.closeOnTriggerClick = false
      portalProps.openOnTriggerMouseEnter = true
      portalProps.closeOnTriggerMouseLeave = true
      // Taken from SUI: https://git.io/vPmCm
      portalProps.mouseLeaveDelay = 70
      portalProps.mouseEnterDelay = 50
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

    this.positionUpdate = null
    _.invoke(this.props, 'onUnmount', e, this.props)
  }

  handleUpdate() {
    if (this.positionUpdate) this.positionUpdate()
  }

  renderContent = ({
    placement: popperPlacement,
    ref: popperRef,
    scheduleUpdate,
    style: popperStyle,
  }) => {
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

    this.positionUpdate = scheduleUpdate

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
            <>
              {PopupHeader.create(header, { autoGenerateKey: false })}
              {PopupContent.create(content, { autoGenerateKey: false })}
            </>
          ) : (
            children
          )}
          {hideOnScroll && <EventStack on={this.hideOnScroll} name='scroll' target='window' />}
        </ElementType>
      </Ref>
    )
  }

  render() {
    const {
      context,
      disabled,
      eventsEnabled,
      offset,
      pinned,
      popperModifiers,
      position,
      positionFixed,
      trigger,
    } = this.props
    const { closed, portalRestProps } = this.state

    if (closed || disabled) {
      return trigger
    }

    const modifiers = _.merge(
      {
        arrow: { enabled: false },
        flip: { enabled: !pinned },
        // There are issues with `keepTogether` and `offset`
        // https://github.com/FezVrasta/popper.js/issues/557
        keepTogether: { enabled: !!offset },
        offset: { offset },
      },
      popperModifiers,
    )
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
          eventsEnabled={eventsEnabled}
          modifiers={modifiers}
          placement={positionsMapping[position]}
          positionFixed={positionFixed}
          referenceElement={referenceElement}
        >
          {this.renderContent}
        </Popper>
      </Portal>
    )
  }
}

Popup.propTypes = {
  /** An element type to render as (string or function). */
  as: PropTypes.elementType,

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

  /** Enables the Popper.js event listeners. */
  eventsEnabled: PropTypes.bool,

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

  /** Disables automatic repositioning of the component, it will always be placed according to the position value. */
  pinned: PropTypes.bool,

  /** Position for the popover. */
  position: PropTypes.oneOf(positions),

  /** Tells `Popper.js` to use the `position: fixed` strategy to position the popover. */
  positionFixed: PropTypes.bool,

  /** An object containing custom settings for the Popper.js modifiers. */
  popperModifiers: PropTypes.object,

  /** A popup can have dependencies which update will schedule a position update. */
  popperDependencies: PropTypes.array,

  /** Popup size. */
  size: PropTypes.oneOf(_.without(SUI.SIZES, 'medium', 'big', 'massive')),

  /** Custom Popup style. */
  style: PropTypes.object,

  /** Element to be rendered in-place where the popup is defined. */
  trigger: PropTypes.node,

  /** Popup width. */
  wide: PropTypes.oneOfType([PropTypes.bool, PropTypes.oneOf(['very'])]),
}

Popup.defaultProps = {
  disabled: false,
  eventsEnabled: true,
  offset: 0,
  on: ['click', 'hover'],
  pinned: false,
  position: 'top left',
}

Popup.Content = PopupContent
Popup.Header = PopupHeader
