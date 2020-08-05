import EventStack from '@semantic-ui-react/event-stack'
import { handleRef, Ref } from '@fluentui/react-component-ref'
import keyboardKey from 'keyboard-key'
import _ from 'lodash'
import PropTypes from 'prop-types'
import React from 'react'

import {
  ModernAutoControlledComponent as Component,
  customPropTypes,
  doesNodeContainClick,
  makeDebugger,
} from '../../lib'
import validateTrigger from './utils/validateTrigger'
import PortalInner from './PortalInner'

const debug = makeDebugger('portal')

/**
 * A component that allows you to render children outside their parent.
 * @see Modal
 * @see Popup
 * @see Dimmer
 * @see Confirm
 */
class Portal extends Component {
  contentRef = React.createRef()
  triggerRef = React.createRef()
  latestDocumentMouseDownEvent = null

  componentWillUnmount() {
    // Clean up timers
    clearTimeout(this.mouseEnterTimer)
    clearTimeout(this.mouseLeaveTimer)
  }

  // ----------------------------------------
  // Document Event Handlers
  // ----------------------------------------

  handleDocumentMouseDown = (e) => {
    this.latestDocumentMouseDownEvent = e
  }

  handleDocumentClick = (e) => {
    const { closeOnDocumentClick } = this.props
    const currentMouseDownEvent = this.latestDocumentMouseDownEvent
    this.latestDocumentMouseDownEvent = null

    if (
      !this.contentRef.current || // no portal
      doesNodeContainClick(this.triggerRef.current, e) || // event happened in trigger (delegate to trigger handlers)
      (currentMouseDownEvent &&
        doesNodeContainClick(this.contentRef.current, currentMouseDownEvent)) || // event originated in the portal but was ended outside
      doesNodeContainClick(this.contentRef.current, e) // event happened in the portal
    ) {
      return
    } // ignore the click

    if (closeOnDocumentClick) {
      debug('handleDocumentClick()')
      this.close(e)
    }
  }

  handleEscape = (e) => {
    if (!this.props.closeOnEscape) return
    if (keyboardKey.getCode(e) !== keyboardKey.Escape) return

    debug('handleEscape()')
    this.close(e)
  }

  // ----------------------------------------
  // Component Event Handlers
  // ----------------------------------------

  handlePortalMouseLeave = (e) => {
    const { closeOnPortalMouseLeave, mouseLeaveDelay } = this.props

    if (!closeOnPortalMouseLeave) return

    // Do not close the portal when 'mouseleave' is triggered by children
    if (e.target !== this.contentRef.current) return

    debug('handlePortalMouseLeave()')
    this.mouseLeaveTimer = this.closeWithTimeout(e, mouseLeaveDelay)
  }

  handlePortalMouseEnter = () => {
    // In order to enable mousing from the trigger to the portal, we need to
    // clear the mouseleave timer that was set when leaving the trigger.
    const { closeOnPortalMouseLeave } = this.props

    if (!closeOnPortalMouseLeave) return

    debug('handlePortalMouseEnter()')
    clearTimeout(this.mouseLeaveTimer)
  }

  handleTriggerBlur = (e, ...rest) => {
    const { trigger, closeOnTriggerBlur } = this.props

    // Call original event handler
    _.invoke(trigger, 'props.onBlur', e, ...rest)

    // IE 11 doesn't work with relatedTarget in blur events
    const target = e.relatedTarget || document.activeElement
    // do not close if focus is given to the portal
    const didFocusPortal = _.invoke(this.contentRef.current, 'contains', target)

    if (!closeOnTriggerBlur || didFocusPortal) return

    debug('handleTriggerBlur()')
    this.close(e)
  }

  handleTriggerClick = (e, ...rest) => {
    const { trigger, closeOnTriggerClick, openOnTriggerClick } = this.props
    const { open } = this.state

    // Call original event handler
    _.invoke(trigger, 'props.onClick', e, ...rest)

    if (open && closeOnTriggerClick) {
      debug('handleTriggerClick() - close')

      this.close(e)
    } else if (!open && openOnTriggerClick) {
      debug('handleTriggerClick() - open')

      this.open(e)
    }
  }

  handleTriggerFocus = (e, ...rest) => {
    const { trigger, openOnTriggerFocus } = this.props

    // Call original event handler
    _.invoke(trigger, 'props.onFocus', e, ...rest)

    if (!openOnTriggerFocus) return

    debug('handleTriggerFocus()')
    this.open(e)
  }

  handleTriggerMouseLeave = (e, ...rest) => {
    clearTimeout(this.mouseEnterTimer)

    const { trigger, closeOnTriggerMouseLeave, mouseLeaveDelay } = this.props

    // Call original event handler
    _.invoke(trigger, 'props.onMouseLeave', e, ...rest)

    if (!closeOnTriggerMouseLeave) return

    debug('handleTriggerMouseLeave()')
    this.mouseLeaveTimer = this.closeWithTimeout(e, mouseLeaveDelay)
  }

  handleTriggerMouseEnter = (e, ...rest) => {
    clearTimeout(this.mouseLeaveTimer)

    const { trigger, mouseEnterDelay, openOnTriggerMouseEnter } = this.props

    // Call original event handler
    _.invoke(trigger, 'props.onMouseEnter', e, ...rest)

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

    this.setState({ open: true })
  }

  openWithTimeout = (e, delay) => {
    debug('openWithTimeout()', delay)
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

    this.setState({ open: false })
  }

  closeWithTimeout = (e, delay) => {
    debug('closeWithTimeout()', delay)
    // React wipes the entire event object and suggests using e.persist() if
    // you need the event for async access. However, even with e.persist
    // certain required props (e.g. currentTarget) are null so we're forced to clone.
    const eventClone = { ...e }
    return setTimeout(() => this.close(eventClone), delay || 0)
  }

  handleMount = () => {
    debug('handleMount()')
    _.invoke(this.props, 'onMount', null, this.props)
  }

  handleUnmount = () => {
    debug('handleUnmount()')
    _.invoke(this.props, 'onUnmount', null, this.props)
  }

  handleTriggerRef = (c) => {
    debug('handleTriggerRef()')
    this.triggerRef.current = c
    handleRef(this.props.triggerRef, c)
  }

  render() {
    const { children, eventPool, mountNode, trigger } = this.props
    const { open } = this.state

    /* istanbul ignore else */
    if (process.env.NODE_ENV !== 'production') {
      validateTrigger(trigger)
    }

    return (
      <>
        {open && (
          <>
            <PortalInner
              innerRef={this.contentRef}
              mountNode={mountNode}
              onMount={this.handleMount}
              onUnmount={this.handleUnmount}
            >
              {children}
            </PortalInner>

            <EventStack
              name='mouseleave'
              on={this.handlePortalMouseLeave}
              pool={eventPool}
              target={this.contentRef}
            />
            <EventStack
              name='mouseenter'
              on={this.handlePortalMouseEnter}
              pool={eventPool}
              target={this.contentRef}
            />
            <EventStack name='mousedown' on={this.handleDocumentMouseDown} pool={eventPool} />
            <EventStack name='click' on={this.handleDocumentClick} pool={eventPool} />
            <EventStack name='keydown' on={this.handleEscape} pool={eventPool} />
          </>
        )}
        {trigger && (
          <Ref innerRef={this.handleTriggerRef}>
            {React.cloneElement(trigger, {
              onBlur: this.handleTriggerBlur,
              onClick: this.handleTriggerClick,
              onFocus: this.handleTriggerFocus,
              onMouseLeave: this.handleTriggerMouseLeave,
              onMouseEnter: this.handleTriggerMouseEnter,
            })}
          </Ref>
        )}
      </>
    )
  }
}

Portal.propTypes = {
  /** Primary content. */
  children: PropTypes.node.isRequired,

  /** Controls whether or not the portal should close when the document is clicked. */
  closeOnDocumentClick: PropTypes.bool,

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

  /** Event pool namespace that is used to handle component events */
  eventPool: PropTypes.string,

  /** The node where the portal should mount. */
  mountNode: PropTypes.any,

  /** Milliseconds to wait before opening on mouse over */
  mouseEnterDelay: PropTypes.number,

  /** Milliseconds to wait before closing on mouse leave */
  mouseLeaveDelay: PropTypes.number,

  /**
   * Called when a close event happens
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
   * Called when an open event happens
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

  /** Controls whether or not the portal is displayed. */
  open: PropTypes.bool,

  /** Controls whether or not the portal should open when the trigger is clicked. */
  openOnTriggerClick: PropTypes.bool,

  /** Controls whether or not the portal should open on focus of the trigger. */
  openOnTriggerFocus: PropTypes.bool,

  /** Controls whether or not the portal should open when mousing over the trigger. */
  openOnTriggerMouseEnter: PropTypes.bool,

  /** Element to be rendered in-place where the portal is defined. */
  trigger: PropTypes.node,

  /** Called with a ref to the trigger node. */
  triggerRef: customPropTypes.ref,
}

Portal.defaultProps = {
  closeOnDocumentClick: true,
  closeOnEscape: true,
  eventPool: 'default',
  openOnTriggerClick: true,
}

Portal.autoControlledProps = ['open']

Portal.Inner = PortalInner

export default Portal
