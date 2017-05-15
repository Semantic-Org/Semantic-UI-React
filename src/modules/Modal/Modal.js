import cx from 'classnames'
import _ from 'lodash'
import PropTypes from 'prop-types'
import React from 'react'

import {
  AutoControlledComponent as Component,
  customPropTypes,
  getElementType,
  getUnhandledProps,
  isBrowser,
  makeDebugger,
  META,
  useKeyOnly,
} from '../../lib'
import Icon from '../../elements/Icon'
import Portal from '../../addons/Portal'
import ModalHeader from './ModalHeader'
import ModalContent from './ModalContent'
import ModalActions from './ModalActions'
import ModalDescription from './ModalDescription'

const debug = makeDebugger('modal')

/**
 * A modal displays content that temporarily blocks interactions with the main view of a site.
 * @see Confirm
 * @see Portal
 */
class Modal extends Component {
  static propTypes = {
    /** An element type to render as (string or function). */
    as: customPropTypes.as,

    /** Elements to render as Modal action buttons. */
    actions: PropTypes.arrayOf(customPropTypes.itemShorthand),

    /** A modal can reduce its complexity */
    basic: PropTypes.bool,

    /** Primary content. */
    children: PropTypes.node,

    /** Additional classes. */
    className: PropTypes.string,

    /** Icon. */
    closeIcon: PropTypes.oneOfType([
      PropTypes.node,
      PropTypes.object,
      PropTypes.bool,
    ]),

    /** Whether or not the Modal should close when the dimmer is clicked. */
    closeOnDimmerClick: PropTypes.bool,

    /** Whether or not the Modal should close when the document is clicked. */
    closeOnDocumentClick: PropTypes.bool,

    /** Simple text content for the Modal. */
    content: customPropTypes.itemShorthand,

    /** Initial value of open. */
    defaultOpen: PropTypes.bool,

    /** A Modal can appear in a dimmer. */
    dimmer: PropTypes.oneOfType([
      PropTypes.bool,
      PropTypes.oneOf(['inverted', 'blurring']),
    ]),

    /** Modal displayed above the content in bold. */
    header: customPropTypes.itemShorthand,

    /** The node where the modal should mount. Defaults to document.body. */
    mountNode: PropTypes.any,

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

    /** Controls whether or not the Modal is displayed. */
    open: PropTypes.bool,

    /** A modal can vary in size */
    size: PropTypes.oneOf(['fullscreen', 'large', 'small']),

    /** Custom styles. */
    style: PropTypes.object,

    /**
     * NOTE: Any unhandled props that are defined in Portal are passed-through
     * to the wrapping Portal.
     */
  }

  static defaultProps = {
    dimmer: true,
    closeOnDimmerClick: true,
    closeOnDocumentClick: false,
  }

  static autoControlledProps = [
    'open',
  ]

  static _meta = {
    name: 'Modal',
    type: META.TYPES.MODULE,
  }

  static Header = ModalHeader
  static Content = ModalContent
  static Description = ModalDescription
  static Actions = ModalActions

  state = {}

  componentWillUnmount() {
    debug('componentWillUnmount()')
    this.handlePortalUnmount()
  }

  // Do not access document when server side rendering
  getMountNode = () => isBrowser ? this.props.mountNode || document.body : null

  handleActionsOverrides = predefinedProps => ({
    onActionClick: (e, actionProps) => {
      const { triggerClose } = actionProps

      _.invoke(predefinedProps, 'onActionClick', e, actionProps)
      if (triggerClose) this.handleClose(e)
    },
  })

  handleClose = (e) => {
    debug('close()')

    const { onClose } = this.props
    if (onClose) onClose(e, this.props)

    this.trySetState({ open: false })
  }

  handleIconOverrides = predefinedProps => ({
    onClick: e => {
      _.invoke(predefinedProps, 'onClick', e)
      this.handleClose(e)
    },
  })

  handleOpen = (e) => {
    debug('open()')

    const { onOpen } = this.props
    if (onOpen) onOpen(e, this.props)

    this.trySetState({ open: true })
  }

  handlePortalMount = (e) => {
    debug('handlePortalMount()')
    const { dimmer } = this.props
    const mountNode = this.getMountNode()

    if (dimmer) {
      debug('adding dimmer')
      mountNode.classList.add('dimmable', 'dimmed')

      if (dimmer === 'blurring') {
        debug('adding blurred dimmer')
        mountNode.classList.add('blurring')
      }
    }

    this.setPosition()

    const { onMount } = this.props
    if (onMount) onMount(e, this.props)
  }

  handlePortalUnmount = (e) => {
    debug('handlePortalUnmount()')

    // Always remove all dimmer classes.
    // If the dimmer value changes while the modal is open, then removing its
    // current value could leave cruft classes previously added.
    const mountNode = this.getMountNode()
    mountNode.classList.remove('blurring', 'dimmable', 'dimmed', 'scrollable')

    cancelAnimationFrame(this.animationRequestId)

    const { onUnmount } = this.props
    if (onUnmount) onUnmount(e, this.props)
  }

  handleRef = c => (this.ref = c)

  setPosition = () => {
    if (this.ref) {
      const mountNode = this.getMountNode()
      const { height } = this.ref.getBoundingClientRect()

      const marginTop = -Math.round(height / 2)
      const scrolling = height >= window.innerHeight

      const newState = {}

      if (this.state.marginTop !== marginTop) {
        newState.marginTop = marginTop
      }

      if (this.state.scrolling !== scrolling) {
        newState.scrolling = scrolling

        if (scrolling) {
          mountNode.classList.add('scrolling')
        } else {
          mountNode.classList.remove('scrolling')
        }
      }

      if (Object.keys(newState).length > 0) this.setState(newState)
    }

    this.animationRequestId = requestAnimationFrame(this.setPosition)
  }

  renderContent = rest => {
    const {
      actions,
      basic,
      children,
      className,
      closeIcon,
      content,
      header,
      size,
      style,
    } = this.props
    const { marginTop, scrolling } = this.state

    const classes = cx(
      'ui',
      size,
      useKeyOnly(basic, 'basic'),
      useKeyOnly(scrolling, 'scrolling'),
      'modal transition visible active',
      className,
    )
    const ElementType = getElementType(Modal, this.props)

    const closeIconName = closeIcon === true ? 'close' : closeIcon
    const closeIconJSX = Icon.create(closeIconName, { overrideProps: this.handleIconOverrides })

    if (!_.isNil(children)) {
      return (
        <ElementType {...rest} className={classes} style={{ marginTop, ...style }} ref={this.handleRef}>
          {closeIconJSX}
          {children}
        </ElementType>
      )
    }

    return (
      <ElementType {...rest} className={classes} style={{ marginTop, ...style }} ref={this.handleRef}>
        {closeIconJSX}
        {ModalHeader.create(header)}
        {ModalContent.create(content)}
        {ModalActions.create(actions, { overrideProps: this.handleActionsOverrides })}
      </ElementType>
    )
  }

  render() {
    const { open } = this.state
    const { closeOnDimmerClick, closeOnDocumentClick, dimmer } = this.props
    const mountNode = this.getMountNode()

    // Short circuit when server side rendering
    if (!isBrowser) return null

    const unhandled = getUnhandledProps(Modal, this.props)
    const portalPropNames = Portal.handledProps

    const rest = _.omit(unhandled, portalPropNames)
    const portalProps = _.pick(unhandled, portalPropNames)

    // wrap dimmer modals
    const dimmerClasses = !dimmer
      ? null
      : cx(
        'ui',
        dimmer === 'inverted' && 'inverted',
        'page modals dimmer transition visible active',
      )

    // Heads up!
    //
    // The SUI CSS selector to prevent the modal itself from blurring requires an immediate .dimmer child:
    // .blurring.dimmed.dimmable>:not(.dimmer) { ... }
    //
    // The .blurring.dimmed.dimmable is the body, so that all body content inside is blurred.
    // We need the immediate child to be the dimmer to :not() blur the modal itself!
    // Otherwise, the portal div is also blurred, blurring the modal.
    //
    // We cannot them wrap the modalJSX in an actual <Dimmer /> instead, we apply the dimmer classes to the <Portal />.

    return (
      <Portal
        closeOnDocumentClick={closeOnDocumentClick}
        closeOnRootNodeClick={closeOnDimmerClick}
        {...portalProps}
        className={dimmerClasses}
        mountNode={mountNode}
        open={open}
        onClose={this.handleClose}
        onMount={this.handlePortalMount}
        onOpen={this.handleOpen}
        onUnmount={this.handlePortalUnmount}
      >
        {this.renderContent(rest)}
      </Portal>
    )
  }
}

export default Modal
