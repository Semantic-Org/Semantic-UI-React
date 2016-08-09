import _ from 'lodash'
import React, { PropTypes, Component } from 'react'
import cx from 'classnames'

import ModalHeader from './ModalHeader'
import ModalContent from './ModalContent'
import ModalActions from './ModalActions'
import ModalDescription from './ModalDescription'
import Portal from 'react-portal'

import {
  getUnhandledProps,
  keyboardKey,
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
    /** Primary content of the modal. Consider using ModalHeader, ModalContent or ModalActions here */
    children: PropTypes.node,

    /** Classes to add to the modal className */
    className: PropTypes.string,

    /** An active modal is visible on the page */
    active: PropTypes.bool,

    /** A modal can reduce its complexity */
    basic: PropTypes.bool,

    /** A modal can appear in a dimmer */
    dimmer: PropTypes.oneOfType([
      PropTypes.bool,
      PropTypes.oneOf(_meta.props.dimmer),
    ]),

    /** A modal can vary in size */
    size: PropTypes.oneOf(_meta.props.size),

    /** Called when the modal is hidden */
    onHide: PropTypes.func,
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
    debug('componentWillMount()')
    const { active } = this.props

    if (active) this.handleShow()

    this.setPosition()
  }

  componentDidUpdate(prevProps, prevState) {
    debug('componentDidUpdate()')

    if (!prevProps.active && this.props.active) {
      debug('modal changed to shown')
      this.handleShow()
    } else if (prevProps.active && !this.props.active) {
      debug('modal changed to hidden')
      this.handleHide()
    }
  }

  componentWillUnmount() {
    debug('componentWillUnmount()')
    this.handleHide()
  }

  onHide = () => {
    debug('onHide()')
    const { onHide } = this.props
    if (onHide) onHide()
  }

  handleHide = () => {
    debug('handleHide()')
    // Always remove all dimmer classes.
    // If the dimmer value changes while the modal is open,
    //   then removing its current value could leave cruft classes previously added.
    document.body.classList.remove('blurring', 'dimmable', 'dimmed', 'scrollable')

    document.removeEventListener('keydown', this.handleDocumentKeyDown)
    document.removeEventListener('click', this.handleClickOutside)
  }

  handleShow = () => {
    debug('handleShow()')
    const { dimmer } = this.props
    if (dimmer) {
      debug('adding dimmer')
      document.body.classList.add('dimmable', 'dimmed')

      if (dimmer === 'blurring') {
        debug('adding blurred dimmer')
        document.body.classList.add('blurring')
      }
    }

    document.addEventListener('keydown', this.handleDocumentKeyDown)
    document.addEventListener('click', this.handleClickOutside)
  }

  handleClickOutside = (e) => {
    // do nothing when clicking inside the modal
    if (this._modalNode.contains(e.target)) return

    debug('handleDimmerClick()')

    e.stopPropagation()
    this.onHide()
  }

  handleDocumentKeyDown = (e) => {
    const key = keyboardKey.getCode(e)
    debug('handleDocumentKeyDown()', key)

    switch (key) {
      case keyboardKey.Escape:
        this.onHide()
        break
      default:
        break
    }
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
    const { active, basic, children, className, dimmer, size } = this.props
    const { marginTop, scrolling } = this.state
    const classes = cx(
      'ui',
      size,
      useKeyOnly(basic, 'basic'),
      useKeyOnly(scrolling, 'scrolling'),
      'modal',
      useKeyOnly(active, 'transition visible active'),
      className,
    )
    const rest = getUnhandledProps(Modal, this.props)

    let modalJSX = (
      <div {...rest} className={classes} style={{ marginTop }} ref={c => (this._modalNode = c)}>
        {children}
      </div>
    )

    // wrap dimmer modals
    const dimmerClasses = !dimmer ? null : cx(
      'ui',
      dimmer === 'inverted' && 'inverted',
      useKeyOnly(active, 'transition visible active'),
      'page modals dimmer',
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

    return <Portal isOpened={active} className={dimmerClasses}>{modalJSX}</Portal>
  }
}

export default Modal
