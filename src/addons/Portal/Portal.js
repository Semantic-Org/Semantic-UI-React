import React, { Children, cloneElement, PropTypes } from 'react'
import ReactDOM, { findDOMNode } from 'react-dom'

import {
  AutoControlledComponent as Component,
  // customPropTypes,
  // getElementType,
  // getUnhandledProps,
  keyboardKey,
  makeDebugger,
  META,
} from '../../lib'

const debug = makeDebugger('portal')

const _meta = {
  name: 'Portal',
  type: META.TYPES.ADDON,
}

/**
 * A component that allows you to render children outside their parent.
 * @see Modal
 */
class Portal extends Component {
  static propTypes = {
    /** Primary content */
    children: PropTypes.node.isRequired,

    /** Classes to be added to the portal node element. */
    className: PropTypes.string,

    /** Controls whether or not the portal should close on a click outside. */
    closeOnDocumentClick: PropTypes.bool,

    /** Controls whether or not the portal should close when escape is pressed is displayed. */
    closeOnEscape: PropTypes.bool,

    /** Initial value of open. */
    defaultOpen: PropTypes.bool,

    /** Called when open changes from true to false */
    onClose: PropTypes.func,

    /** Called when open changes from false to true */
    onOpen: PropTypes.func,

    /** Controls whether or not the portal is displayed. */
    open: PropTypes.bool,

    /** Controls whether or not the portal should open when the trigger is clicked. */
    openOnTriggerClick: PropTypes.bool,

    /** Controls whether or not the portal should open when the trigger is clicked. */
    openOnTriggerMouseOver: PropTypes.bool,

    /** Element to be rendered in-place where the portal is defined. */
    trigger: PropTypes.node,
  }

  static defaultProps = {
    closeOnEscape: true,
    closeOnDocumentClick: true,
    openOnTriggerClick: true,
  }

  static autoControlledProps = [
    'open',
  ]

  static _meta = _meta

  componentDidMount() {
    if (this.state.open) {
      this.renderPortal()
    }
  }

  componentDidUpdate(prevProps, prevState) { // eslint-disable-line complexity
    // NOTE: Ideally the portal rendering would happen in the render() function
    // but React gives a warning about not being pure and suggests doing it
    // within this method.

    // If the portal is open, render (or re-render) the portal and child.
    if (this.state.open) {
      this.renderPortal()
    }

    if (prevState.open && !this.state.open) {
      debug('portal closed')
      this.unmountPortal()
    }
  }

  componentWillUnmount() {
    this.unmountPortal()
  }

  // ----------------------------------------
  // Document Event Handlers
  // ----------------------------------------

  closeOnDocumentClick = (e) => {
    if (!this.props.closeOnDocumentClick) return

    debug('closeOnDocumentClick()')

    e.stopPropagation()
    this.close()
  }

  closeOnEscape = (e) => {
    if (!this.props.closeOnEscape) return
    if (keyboardKey.getCode(e) !== keyboardKey.Escape) return

    debug('closeOnEscape()')

    e.preventDefault()
    this.close()
  }

  // ----------------------------------------
  // Component Event Handlers
  // ----------------------------------------

  handleChildClick = (e) => {
    debug('handleChildClick()')

    // Prevent closeOnDocumentClick
    e.nativeEvent.stopImmediatePropagation()
  }

  handleTriggerClick = (e) => {
    if (!this.props.openOnTriggerClick) return

    debug('handleTriggerClick()')

    e.stopPropagation()
    this.open()
  }

  handleTriggerMouseOver = (e) => {
    if (!this.props.openOnTriggerMouseOver) return

    debug('handleTriggerMouseOver()')
    this.open()
  }

  // ----------------------------------------
  // Behavior
  // ----------------------------------------

  open = () => {
    debug('open()')
    this.trySetState({ open: true })
  }

  close = () => {
    debug('close()')
    this.trySetState({ open: false })
  }

  renderPortal() {
    const { children, className } = this.props

    this.mountPortal()

    this.node.className = className

    const child = cloneElement(Children.only(children), {
      onClick: this.handleChildClick,
    })

    this.portal = ReactDOM.unstable_renderSubtreeIntoContainer(
      this,
      child,
      this.node
    )
  }

  mountPortal = () => {
    if (this.node) return

    this.node = document.createElement('div')
    document.body.appendChild(this.node)

    const { onOpen } = this.props
    if (onOpen) onOpen()

    document.addEventListener('keydown', this.closeOnEscape)
    document.addEventListener('click', this.closeOnDocumentClick)
  }

  unmountPortal = () => {
    if (!this.node) return

    ReactDOM.unmountComponentAtNode(this.node)
    document.body.removeChild(this.node)

    this.node = null
    this.portal = null

    const { onClose } = this.props
    if (onClose) onClose()

    document.removeEventListener('keydown', this.closeOnEscape)
    document.removeEventListener('click', this.closeOnDocumentClick)
  }

  render() {
    const { trigger } = this.props

    if (!trigger) return null

    return React.cloneElement(trigger, {
      onClick: this.handleTriggerClick,
      onMouseOver: this.handleTriggerMouseOver,
    })
  }
}

export default Portal
