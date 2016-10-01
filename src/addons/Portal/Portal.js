import _ from 'lodash'
import React, { Children, PropTypes } from 'react'
import ReactDOM from 'react-dom'

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

    /** Controls whether or not the portal should close on blur of the trigger. */
    closeOnTriggerBlur: PropTypes.bool,

    /** Controls whether or not the portal should close when mousing out of the trigger. */
    closeOnTriggerMouseLeave: PropTypes.bool,

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

    /** Controls whether or not the portal should open on focus of the trigger. */
    openOnTriggerFocus: PropTypes.bool,

    /** Controls whether or not the portal should open when mousing over the trigger. */
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

  componentDidUpdate(prevProps, prevState) {
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
    if (this.portal.contains(e.target)) return

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

  handleTriggerBlur = (e) => {
    const { trigger, closeOnTriggerBlur } = this.props

    // Call original event handler
    _.invoke(trigger, 'props.onBlur', e)

    if (!closeOnTriggerBlur) return

    debug('handleTriggerBlur()')
    this.close()
  }

  handleTriggerClick = (e) => {
    const { trigger, openOnTriggerClick } = this.props

    // Call original event handler
    _.invoke(trigger, 'props.onClick', e)

    if (!openOnTriggerClick) return

    debug('handleTriggerClick()')

    e.stopPropagation()

    // Prevents closeOnDocumentClick from closing the portal when
    // openOnTriggerFocus is set. Focus shifts on mousedown so the portal opens
    // before the click finishes so it may actually wind up on the document.
    e.nativeEvent.stopImmediatePropagation()
    this.open()
  }

  handleTriggerFocus = (e) => {
    const { trigger, openOnTriggerFocus } = this.props

    // Call original event handler
    _.invoke(trigger, 'props.onFocus', e)

    if (!openOnTriggerFocus) return

    debug('handleTriggerFocus()')
    this.open()
  }

  handleTriggerMouseLeave = (e) => {
    const { trigger, closeOnTriggerMouseLeave } = this.props

    // Call original event handler
    _.invoke(trigger, 'props.onMouseLeave', e)

    if (!closeOnTriggerMouseLeave) return

    debug('handleTriggerMouseLeave()')
    this.close()
  }

  handleTriggerMouseOver = (e) => {
    const { trigger, openOnTriggerMouseOver } = this.props

    // Call original event handler
    _.invoke(trigger, 'props.onMouseOver', e)

    if (!openOnTriggerMouseOver) return

    debug('handleTriggerMouseOver()')
    this.open()
  }

  // ----------------------------------------
  // Behavior
  // ----------------------------------------

  open = () => {
    debug('open()')

    const { onOpen } = this.props
    if (onOpen) onOpen()

    this.trySetState({ open: true })
  }

  close = () => {
    debug('close()')

    const { onClose } = this.props
    if (onClose) onClose()

    this.trySetState({ open: false })
  }

  renderPortal() {
    const { children, className } = this.props

    this.mountPortal()

    this.node.className = className

    this.portal = ReactDOM.unstable_renderSubtreeIntoContainer(
      this,
      Children.only(children),
      this.node
    )
  }

  mountPortal = () => {
    if (this.node) return

    this.open()

    this.node = document.createElement('div')
    document.body.appendChild(this.node)

    document.addEventListener('keydown', this.closeOnEscape)
    document.addEventListener('click', this.closeOnDocumentClick)
  }

  unmountPortal = () => {
    if (!this.node) return

    this.close()

    ReactDOM.unmountComponentAtNode(this.node)
    document.body.removeChild(this.node)

    this.node = null
    this.portal = null

    document.removeEventListener('keydown', this.closeOnEscape)
    document.removeEventListener('click', this.closeOnDocumentClick)
  }

  render() {
    const { trigger } = this.props

    if (!trigger) return null

    return React.cloneElement(trigger, {
      onBlur: this.handleTriggerBlur,
      onClick: this.handleTriggerClick,
      onFocus: this.handleTriggerFocus,
      onMouseLeave: this.handleTriggerMouseLeave,
      onMouseOver: this.handleTriggerMouseOver,
    })
  }
}

export default Portal
