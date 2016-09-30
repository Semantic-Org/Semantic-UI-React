import _ from 'lodash'
import React, { PropTypes, Component } from 'react'
import cx from 'classnames'

import ModalHeader from './ModalHeader'
import ModalContent from './ModalContent'
import ModalActions from './ModalActions'
import ModalDescription from './ModalDescription'
import { Portal } from './../../addons'

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
 */
class Modal extends Component {
  static propTypes = {
    /** An element type to render as (string or function). */
    as: customPropTypes.as,

    /** Primary content of the modal. Consider using ModalHeader, ModalContent or ModalActions here */
    children: PropTypes.node,

    /** Classes to add to the modal className */
    className: PropTypes.string,

    /** A modal can reduce its complexity */
    basic: PropTypes.bool,

    /** A modal can appear in a dimmer */
    dimmer: PropTypes.oneOfType([
      PropTypes.bool,
      PropTypes.oneOf(_meta.props.dimmer),
    ]),

    /** Props to be passed to the Portal */
    portal: PropTypes.object,

    /** A modal can vary in size */
    size: PropTypes.oneOf(_meta.props.size),

    /** Called when the modal is hidden */
    onClose: PropTypes.func,

    /** Called when the modal is opened */
    onOpen: PropTypes.func,
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

  componentDidMount() {
    debug('componentDidMount()')
    this.setPosition()
  }

  componentWillUnmount() {
    debug('componentWillUnmount()')
    this.handleClose()
  }

  handleClose = () => {
    debug('handleClose()')

    // Always remove all dimmer classes.
    // If the dimmer value changes while the modal is open,
    //   then removing its current value could leave cruft classes previously added.
    document.body.classList.remove('blurring', 'dimmable', 'dimmed', 'scrollable')

    const { onClose } = this.props
    if (onClose) onClose()
  }

  handleOpen = () => {
    debug('handleOpen()')
    const { dimmer } = this.props

    if (dimmer) {
      debug('adding dimmer')
      document.body.classList.add('dimmable', 'dimmed')

      if (dimmer === 'blurring') {
        debug('adding blurred dimmer')
        document.body.classList.add('blurring')
      }
    }

    const { onOpen } = this.props
    if (onOpen) onOpen()
  }

  setPosition = () => {
    if (this._modalNode) {
      const { height } = this._modalNode.getBoundingClientRect()
      const scrolling = height >= window.innerHeight

      const newState = {
        marginTop: -Math.round(height / 2),
        scrolling,
      }

      // add/remove scrolling class on body
      if (!this.state.scrolling && scrolling) {
        document.body.classList.add('scrolling')
      } else if (this.state.scrolling && !scrolling) {
        document.body.classList.remove('scrolling')
      }

      if (!_.isEqual(newState, this.state)) {
        this.setState(newState)
      }
    }

    requestAnimationFrame(this.setPosition)
  }

  render() {
    const { basic, children, className, dimmer, size, portal } = this.props
    const { marginTop, scrolling } = this.state
    const classes = cx(
      'ui',
      size,
      useKeyOnly(basic, 'basic'),
      useKeyOnly(scrolling, 'scrolling'),
      'modal transition visible active',
      className,
    )
    const rest = getUnhandledProps(Modal, this.props)
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
        {...portal}
        className={dimmerClasses}
        onClose={this.handleClose}
        onOpen={this.handleOpen}
      >
        {modalJSX}
      </Portal>
    )
  }
}

export default Modal
