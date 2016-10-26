import _ from 'lodash'
import React, { PropTypes, Component } from 'react'
import cx from 'classnames'

import ModalHeader from './ModalHeader'
import ModalContent from './ModalContent'
import ModalActions from './ModalActions'
import ModalDescription from './ModalDescription'
import Portal from '../../addons/Portal'

import {
  customPropTypes,
  getElementType,
  getUnhandledProps,
  makeDebugger,
  META,
  useKeyOnly,
} from '../../lib'

const debug = makeDebugger('modal')

const _meta = {
  name: 'Modal',
  type: META.TYPES.MODULE,
  props: {
    size: ['fullscreen', 'large', 'small'],
    dimmer: ['inverted', 'blurring'],
  },
}

/**
 * A modal displays content that temporarily blocks interactions with the main view of a site
 * @see Confirm
 * @see Portal
 */
class Modal extends Component {
  static propTypes = {
    /** An element type to render as (string or function). */
    as: customPropTypes.as,

    /** Primary content. */
    children: PropTypes.node,

    /** Additional classes. */
    className: PropTypes.string,

    /** A modal can reduce its complexity */
    basic: PropTypes.bool,

    /** A modal can appear in a dimmer */
    dimmer: PropTypes.oneOfType([
      PropTypes.bool,
      PropTypes.oneOf(_meta.props.dimmer),
    ]),

    /** The node where the modal should mount.. */
    mountNode: PropTypes.any,

    /** Called when a close event happens */
    onClose: PropTypes.func,

    /** Called when the portal is mounted on the DOM */
    onMount: PropTypes.func,

    /** Called when an open event happens */
    onOpen: PropTypes.func,

    /** Called when the portal is unmounted from the DOM */
    onUnmount: PropTypes.func,

    /** A modal can vary in size */
    size: PropTypes.oneOf(_meta.props.size),

    /**
     * NOTE: Any unhandled props that are defined in Portal are passed-through
     * to the wrapping Portal.
     */
  }

  static defaultProps = {
    dimmer: true,
  }

  static _meta = _meta
  static Header = ModalHeader
  static Content = ModalContent
  static Description = ModalDescription
  static Actions = ModalActions

  state = {}

  componentWillUnmount() {
    debug('componentWillUnmount()')
    this.handlePortalUnmount()
  }

  handleClose = (e) => {
    const { onClose } = this.props
    if (onClose) onClose(e, this.props)
  }

  handleOpen = (e) => {
    const { onOpen } = this.props
    if (onOpen) onOpen(e, this.props)
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

  getMountNode = () => {
    return this.props.mountNode || document.body
  }

  setPosition = () => {
    if (this._modalNode) {
      const mountNode = this.getMountNode()
      const { height } = this._modalNode.getBoundingClientRect()
      const scrolling = height >= window.innerHeight

      const newState = {
        marginTop: -Math.round(height / 2),
        scrolling,
      }

      // add/remove scrolling class on body
      if (!this.state.scrolling && scrolling) {
        mountNode.classList.add('scrolling')
      } else if (this.state.scrolling && !scrolling) {
        mountNode.classList.remove('scrolling')
      }

      if (!_.isEqual(newState, this.state)) {
        this.setState(newState)
      }
    }

    this.animationRequestId = requestAnimationFrame(this.setPosition)
  }

  render() {
    const { basic, children, className, dimmer, size } = this.props
    const { marginTop, scrolling } = this.state
    const classes = cx(
      'ui',
      size,
      useKeyOnly(basic, 'basic'),
      useKeyOnly(scrolling, 'scrolling'),
      'modal transition visible active',
      className,
    )
    const unhandled = getUnhandledProps(Modal, this.props)
    const portalPropNames = _.keys(Portal.propTypes)

    const rest = _.omit(unhandled, portalPropNames)
    const portalProps = _.pick(unhandled, portalPropNames)
    const ElementType = getElementType(Modal, this.props)

    const modalJSX = (
      <ElementType {...rest} className={classes} style={{ marginTop }} ref={c => (this._modalNode = c)}>
        {children}
      </ElementType>
    )

    // wrap dimmer modals
    const dimmerClasses = !dimmer ? null : cx(
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
        closeOnRootNodeClick
        closeOnDocumentClick={false}
        {...portalProps}
        className={dimmerClasses}
        mountNode={this.getMountNode()}
        onClose={this.handleClose}
        onMount={this.handlePortalMount}
        onOpen={this.handleOpen}
        onUnmount={this.handlePortalUnmount}
      >
        {modalJSX}
      </Portal>
    )
  }
}

export default Modal
