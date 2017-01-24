import _ from 'lodash'
import React, { Children, PropTypes } from 'react'
import ReactDOM from 'react-dom'

import {
  AutoControlledComponent as Component,
  customPropTypes,
  keyboardKey,
  isBrowser,
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
    /** Primary content. */
    children: PropTypes.node.isRequired,

    /** Additional classes. */
    className: PropTypes.string,

    /**
     * Controls whether or not the portal should close on a click on the portal background.
     * NOTE: This differs from closeOnDocumentClick:
     * - DocumentClick - any click not within the portal
     * - RootNodeClick - a click not within the portal but within the portal's wrapper
     */
    closeOnRootNodeClick: customPropTypes.every([
      customPropTypes.disallow(['closeOnDocumentClick']),
      PropTypes.bool,
    ]),

    /** Controls whether or not the portal should close on a click outside. */
    closeOnDocumentClick: customPropTypes.every([
      customPropTypes.disallow(['closeOnRootNodeClick']),
      PropTypes.bool,
    ]),

    /** Controls whether or not the portal should close when escape is pressed is displayed. */
    closeOnEscape: PropTypes.bool,

    /**
     * Controls whether or not the portal should close when mousing out of the portal.
     * NOTE: This will prevent `closeOnTriggerMouseLeave` when mousing over the
     * gap from the trigger to the portal.
     */
    closeOnPortalMouseLeave: PropTypes.bool,

    /** Controls whether or not the portal should close on blur of the trigger. */
    closeOnTriggerBlur: PropTypes.bool,

    /** Controls whether or not the portal should close on click of the trigger. */
    closeOnTriggerClick: PropTypes.bool,

    /** Controls whether or not the portal should close when mousing out of the trigger. */
    closeOnTriggerMouseLeave: PropTypes.bool,

    /** Initial value of open. */
    defaultOpen: PropTypes.bool,

    /** The node where the portal should mount. */
    mountNode: PropTypes.any,

    /** Milliseconds to wait before closing on mouse leave */
    mouseLeaveDelay: PropTypes.number,

    /** Milliseconds to wait before opening on mouse over */
    mouseEnterDelay: PropTypes.number,

    /**
     * Called when a close event happens
     *
     * @param {SyntheticEvent} event - React's original SyntheticEvent.
     * @param {object} data - All props.
     */
    onClose: PropTypes.func,

    /**
     * Called when the portal is mounted on the DOM
     *
     * @param {null}
     * @param {object} data - All props.
     */
    onMount: PropTypes.func,

    /**
     * Called when an open event happens
     *
     * @param {SyntheticEvent} event - React's original SyntheticEvent.
     * @param {object} data - All props.
     */
    onOpen: PropTypes.func,

    /**
     * Called when the portal is unmounted from the DOM
     *
     * @param {null}
     * @param {object} data - All props.
     */
    onUnmount: PropTypes.func,

    /** Controls whether or not the portal is displayed. */
    open: PropTypes.bool,

    /** Controls whether or not the portal should open when the trigger is clicked. */
    openOnTriggerClick: PropTypes.bool,

    /** Controls whether or not the portal should open on focus of the trigger. */
    openOnTriggerFocus: PropTypes.bool,

    /** Controls whether or not the portal should open when mousing over the trigger. */
    openOnTriggerMouseEnter: PropTypes.bool,

    /** Controls whether the portal should be prepended to the mountNode instead of appended. */
    prepend: PropTypes.bool,

    /** Element to be rendered in-place where the portal is defined. */
    trigger: PropTypes.node,
  }

  static defaultProps = {
    closeOnDocumentClick: true,
    closeOnEscape: true,
    openOnTriggerClick: true,
    mountNode: isBrowser ? document.body : null,
  }

  static autoControlledProps = [
    'open',
  ]

  static _meta = _meta

  state = {}

  componentDidMount() {
    debug('componentDidMount()')
    this.renderPortal()
  }

  componentDidUpdate(prevProps, prevState) {
    debug('componentDidUpdate()')
    // NOTE: Ideally the portal rendering would happen in the render() function
    // but React gives a warning about not being pure and suggests doing it
    // within this method.

    // If the portal is open, render (or re-render) the portal and child.
    this.renderPortal()

    if (prevState.open && !this.state.open) {
      debug('portal closed')
      this.unmountPortal()
    }
  }

  componentWillUnmount() {
    this.unmountPortal()

    // Clean up timers
    clearTimeout(this.mouseEnterTimer)
    clearTimeout(this.mouseLeaveTimer)
  }

  // ----------------------------------------
  // Document Event Handlers
  // ----------------------------------------

  handleDocumentClick = (e) => {
    const { closeOnDocumentClick, closeOnRootNodeClick } = this.props

    // If not mounted, no portal, or event happened in the portal, ignore it
    if (!this.node || !this.portal || this.portal.contains(e.target)) return

    if (closeOnDocumentClick || (closeOnRootNodeClick && this.node.contains(e.target))) {
      debug('handleDocumentClick()')

      e.stopPropagation()
      this.close(e)
    }
  }

  handleEscape = (e) => {
    if (!this.props.closeOnEscape) return
    if (keyboardKey.getCode(e) !== keyboardKey.Escape) return

    debug('handleEscape()')

    e.preventDefault()
    this.close(e)
  }

  // ----------------------------------------
  // Component Event Handlers
  // ----------------------------------------

  handlePortalMouseLeave = (e) => {
    const { closeOnPortalMouseLeave, mouseLeaveDelay } = this.props

    if (!closeOnPortalMouseLeave) return

    debug('handlePortalMouseLeave()')
    this.mouseLeaveTimer = this.closeWithTimeout(e, mouseLeaveDelay)
  }

  handlePortalMouseEnter = (e) => {
    // In order to enable mousing from the trigger to the portal, we need to
    // clear the mouseleave timer that was set when leaving the trigger.
    const { closeOnPortalMouseLeave } = this.props

    if (!closeOnPortalMouseLeave) return

    debug('handlePortalMouseEnter()')
    clearTimeout(this.mouseLeaveTimer)
  }

  handleTriggerBlur = (e) => {
    const { trigger, closeOnTriggerBlur } = this.props

    // Call original event handler
    _.invoke(trigger, 'props.onBlur', e)

    if (!closeOnTriggerBlur) return

    debug('handleTriggerBlur()')
    this.close(e)
  }

  handleTriggerClick = (e) => {
    const { trigger, closeOnTriggerClick, openOnTriggerClick } = this.props
    const { open } = this.state

    // Call original event handler
    _.invoke(trigger, 'props.onClick', e)

    if (open && closeOnTriggerClick) {
      debug('handleTriggerClick() - close')

      e.stopPropagation()
      this.close(e)
    } else if (!open && openOnTriggerClick) {
      debug('handleTriggerClick() - open')

      e.stopPropagation()
      this.open(e)
    }

    // Prevents handleDocumentClick from closing the portal when
    // openOnTriggerFocus is set. Focus shifts on mousedown so the portal opens
    // before the click finishes so it may actually wind up on the document.
    e.nativeEvent.stopImmediatePropagation()
  }

  handleTriggerFocus = (e) => {
    const { trigger, openOnTriggerFocus } = this.props

    // Call original event handler
    _.invoke(trigger, 'props.onFocus', e)

    if (!openOnTriggerFocus) return

    debug('handleTriggerFocus()')
    this.open(e)
  }

  handleTriggerMouseLeave = (e) => {
    clearTimeout(this.mouseEnterTimer)

    const { trigger, closeOnTriggerMouseLeave, mouseLeaveDelay } = this.props

    // Call original event handler
    _.invoke(trigger, 'props.onMouseLeave', e)

    if (!closeOnTriggerMouseLeave) return

    debug('handleTriggerMouseLeave()')
    this.mouseLeaveTimer = this.closeWithTimeout(e, mouseLeaveDelay)
  }

  handleTriggerMouseEnter = (e) => {
    clearTimeout(this.mouseLeaveTimer)

    const { trigger, mouseEnterDelay, openOnTriggerMouseEnter } = this.props

    // Call original event handler
    _.invoke(trigger, 'props.onMouseEnter', this.handleTriggerMouseEnter)

    if (!openOnTriggerMouseEnter) return

    debug('handleTriggerMouseEnter()')
    this.mouseEnterTimer = this.openWithTimeout(e, mouseEnterDelay)
  }

  // ----------------------------------------
  // Behavior
  // ----------------------------------------

  open = (e) => {
    debug('open()')

    const { onOpen } = this.props
    if (onOpen) onOpen(e, this.props)

    this.trySetState({ open: true })
  }

  openWithTimeout = (e, delay) => {
    // React wipes the entire event object and suggests using e.persist() if
    // you need the event for async access. However, even with e.persist
    // certain required props (e.g. currentTarget) are null so we're forced to clone.
    const eventClone = { ...e }
    return setTimeout(() => this.open(eventClone), delay || 0)
  }

  close = (e) => {
    debug('close()')

    const { onClose } = this.props
    if (onClose) onClose(e, this.props)

    this.trySetState({ open: false })
  }

  closeWithTimeout = (e, delay) => {
    // React wipes the entire event object and suggests using e.persist() if
    // you need the event for async access. However, even with e.persist
    // certain required props (e.g. currentTarget) are null so we're forced to clone.
    const eventClone = { ...e }
    return setTimeout(() => this.close(eventClone), delay || 0)
  }

  renderPortal() {
    if (!this.state.open) return
    debug('renderPortal()')

    const { children, className, closeOnTriggerBlur } = this.props

    this.mountPortal()

    // Server side rendering
    if (!isBrowser) return null

    this.node.className = className || ''

    // when re-rendering, first remove listeners before re-adding them to the new node
    if (this.portal) {
      this.portal.removeEventListener('mouseleave', this.handlePortalMouseLeave)
      this.portal.removeEventListener('mouseenter', this.handlePortalMouseEnter)
    }

    ReactDOM.unstable_renderSubtreeIntoContainer(
      this,
      Children.only(children),
      this.node
    )

    this.portal = this.node.firstElementChild

    // don't take focus away from portals that close on blur
    if (!this.didInitialRender && !closeOnTriggerBlur) {
      this.didInitialRender = true
      this.previousActiveElement = document.activeElement

      // add a tabIndex so we can focus it, remove outline
      this.portal.tabIndex = -1
      this.portal.style.outline = 'none'

      // Wait a tick for things like popups which need to calculate where the popup shows up.
      // Otherwise, the element is focused at its initial position, scrolling the browser, then
      // it is immediately repositioned at the proper location.
      setTimeout(() => {
        if (this.portal) this.portal.focus()
      })
    }

    this.portal.addEventListener('mouseleave', this.handlePortalMouseLeave)
    this.portal.addEventListener('mouseenter', this.handlePortalMouseEnter)
  }

  mountPortal = () => {
    if (!isBrowser || this.node) return

    debug('mountPortal()')

    const { mountNode, prepend } = this.props

    this.node = document.createElement('div')

    if (prepend) {
      mountNode.insertBefore(this.node, mountNode.firstElementChild)
    } else {
      mountNode.appendChild(this.node)
    }

    document.addEventListener('click', this.handleDocumentClick)
    document.addEventListener('keydown', this.handleEscape)

    const { onMount } = this.props
    if (onMount) onMount(null, this.props)
  }

  unmountPortal = () => {
    if (!isBrowser || !this.node) return
    this.didInitialRender = false

    debug('unmountPortal()')

    ReactDOM.unmountComponentAtNode(this.node)
    this.node.parentNode.removeChild(this.node)
    if (this.previousActiveElement) this.previousActiveElement.focus()

    this.portal.removeEventListener('mouseleave', this.handlePortalMouseLeave)
    this.portal.removeEventListener('mouseenter', this.handlePortalMouseEnter)

    this.node = null
    this.portal = null

    document.removeEventListener('click', this.handleDocumentClick)
    document.removeEventListener('keydown', this.handleEscape)

    const { onUnmount } = this.props
    if (onUnmount) onUnmount(null, this.props)
  }

  render() {
    const { trigger } = this.props

    if (!trigger) return null

    return React.cloneElement(trigger, {
      onBlur: this.handleTriggerBlur,
      onClick: this.handleTriggerClick,
      onFocus: this.handleTriggerFocus,
      onMouseLeave: this.handleTriggerMouseLeave,
      onMouseEnter: this.handleTriggerMouseEnter,
    })
  }
}

export default Portal
