import EventStack from '@semantic-ui-react/event-stack'
import keyboardKey from 'keyboard-key'
import _ from 'lodash'
import PropTypes from 'prop-types'
import React from 'react'

import {
  customPropTypes,
  doesNodeContainClick,
  makeDebugger,
  useAutoControlledValue,
} from '../../lib'
import useTrigger from './utils/useTrigger'
import PortalInner from './PortalInner'

const debug = makeDebugger('portal')

/**
 * A component that allows you to render children outside their parent.
 * @see Modal
 * @see Popup
 * @see Dimmer
 * @see Confirm
 */
function Portal(props) {
  const {
    children,
    closeOnDocumentClick,
    closeOnEscape,
    closeOnPortalMouseLeave,
    closeOnTriggerBlur,
    closeOnTriggerClick,
    closeOnTriggerMouseLeave,
    eventPool,
    mountNode,
    mouseEnterDelay,
    mouseLeaveDelay,
    openOnTriggerClick,
    openOnTriggerFocus,
    openOnTriggerMouseEnter,
  } = props

  const [open, setOpen] = useAutoControlledValue({
    state: props.open,
    defaultState: props.defaultOpen,
    initialState: false,
  })

  const contentRef = React.useRef()
  const [triggerRef, trigger] = useTrigger(props.trigger, props.triggerRef)

  const mouseEnterTimer = React.useRef()
  const mouseLeaveTimer = React.useRef()
  const latestDocumentMouseDownEvent = React.useRef()

  // ----------------------------------------
  // Behavior
  // ----------------------------------------

  const openPortal = (e) => {
    debug('open()')

    setOpen(true)
    _.invoke(props, 'onOpen', e, { ...props, open: true })
  }

  const openPortalWithTimeout = (e, delay) => {
    debug('openWithTimeout()', delay)
    // React wipes the entire event object and suggests using e.persist() if
    // you need the event for async access. However, even with e.persist
    // certain required props (e.g. currentTarget) are null so we're forced to clone.
    const eventClone = { ...e }
    return setTimeout(() => openPortal(eventClone), delay || 0)
  }

  const closePortal = (e) => {
    debug('close()')

    setOpen(false)
    _.invoke(props, 'onClose', e, { ...props, open: false })
  }

  const closePortalWithTimeout = (e, delay) => {
    debug('closeWithTimeout()', delay)
    // React wipes the entire event object and suggests using e.persist() if
    // you need the event for async access. However, even with e.persist
    // certain required props (e.g. currentTarget) are null so we're forced to clone.
    const eventClone = { ...e }
    return setTimeout(() => closePortal(eventClone), delay || 0)
  }

  // ----------------------------------------
  // Document Event Handlers
  // ----------------------------------------

  React.useEffect(() => {
    // Clean up timers
    clearTimeout(mouseEnterTimer.current)
    clearTimeout(mouseLeaveTimer.current)
  }, [])

  const handleDocumentMouseDown = (e) => {
    latestDocumentMouseDownEvent.current = e
  }

  const handleDocumentClick = (e) => {
    const currentMouseDownEvent = latestDocumentMouseDownEvent.current
    latestDocumentMouseDownEvent.current = null

    // event happened in trigger (delegate to trigger handlers)
    const isInsideTrigger = doesNodeContainClick(triggerRef.current, e)
    // event originated in the portal but was ended outside
    const isOriginatedFromPortal =
      currentMouseDownEvent && doesNodeContainClick(contentRef.current, currentMouseDownEvent)
    // event happened in the portal
    const isInsidePortal = doesNodeContainClick(contentRef.current, e)

    if (
      !contentRef.current?.contains || // no portal
      isInsideTrigger ||
      isOriginatedFromPortal ||
      isInsidePortal
    ) {
      return
    } // ignore the click

    if (closeOnDocumentClick) {
      debug('handleDocumentClick()')
      closePortal(e)
    }
  }

  const handleEscape = (e) => {
    if (!closeOnEscape) {
      return
    }
    if (keyboardKey.getCode(e) !== keyboardKey.Escape) {
      return
    }

    debug('handleEscape()')
    closePortal(e)
  }

  // ----------------------------------------
  // Component Event Handlers
  // ----------------------------------------

  const handlePortalMouseLeave = (e) => {
    if (!closeOnPortalMouseLeave) {
      return
    }

    // Do not close the portal when 'mouseleave' is triggered by children
    if (e.target !== contentRef.current) {
      return
    }

    debug('handlePortalMouseLeave()')
    mouseLeaveTimer.current = closePortalWithTimeout(e, mouseLeaveDelay)
  }

  const handlePortalMouseEnter = () => {
    // In order to enable mousing from the trigger to the portal, we need to
    // clear the mouseleave timer that was set when leaving the trigger.
    if (!closeOnPortalMouseLeave) {
      return
    }

    debug('handlePortalMouseEnter()')
    clearTimeout(mouseLeaveTimer.current)
  }

  const handleTriggerBlur = (e, ...rest) => {
    // Call original event handler
    _.invoke(trigger, 'props.onBlur', e, ...rest)

    // IE 11 doesn't work with relatedTarget in blur events
    const target = e.relatedTarget || document.activeElement
    // do not close if focus is given to the portal
    const didFocusPortal = _.invoke(contentRef.current, 'contains', target)

    if (!closeOnTriggerBlur || didFocusPortal) {
      return
    }

    debug('handleTriggerBlur()')
    closePortal(e)
  }

  const handleTriggerClick = (e, ...rest) => {
    // Call original event handler
    _.invoke(trigger, 'props.onClick', e, ...rest)

    if (open && closeOnTriggerClick) {
      debug('handleTriggerClick() - close')

      closePortal(e)
    } else if (!open && openOnTriggerClick) {
      debug('handleTriggerClick() - open')
      openPortal(e)
    }
  }

  const handleTriggerFocus = (e, ...rest) => {
    // Call original event handler
    _.invoke(trigger, 'props.onFocus', e, ...rest)

    if (!openOnTriggerFocus) {
      return
    }

    debug('handleTriggerFocus()')
    openPortal(e)
  }

  const handleTriggerMouseLeave = (e, ...rest) => {
    clearTimeout(mouseEnterTimer)

    // Call original event handler
    _.invoke(trigger, 'props.onMouseLeave', e, ...rest)

    if (!closeOnTriggerMouseLeave) {
      return
    }

    debug('handleTriggerMouseLeave()')
    mouseLeaveTimer.current = closePortalWithTimeout(e, mouseLeaveDelay)
  }

  const handleTriggerMouseEnter = (e, ...rest) => {
    clearTimeout(mouseLeaveTimer)

    // Call original event handler
    _.invoke(trigger, 'props.onMouseEnter', e, ...rest)

    if (!openOnTriggerMouseEnter) {
      return
    }

    debug('handleTriggerMouseEnter()')
    mouseEnterTimer.current = openPortalWithTimeout(e, mouseEnterDelay)
  }

  return (
    <>
      {open && (
        <>
          <PortalInner
            mountNode={mountNode}
            onMount={() => _.invoke(props, 'onMount', null, props)}
            onUnmount={() => _.invoke(props, 'onUnmount', null, props)}
            ref={contentRef}
          >
            {children}
          </PortalInner>

          <EventStack
            name='mouseleave'
            on={handlePortalMouseLeave}
            pool={eventPool}
            target={contentRef}
          />
          <EventStack
            name='mouseenter'
            on={handlePortalMouseEnter}
            pool={eventPool}
            target={contentRef}
          />
          <EventStack name='mousedown' on={handleDocumentMouseDown} pool={eventPool} />
          <EventStack name='click' on={handleDocumentClick} pool={eventPool} />
          <EventStack name='keydown' on={handleEscape} pool={eventPool} />
        </>
      )}
      {trigger &&
        React.cloneElement(trigger, {
          onBlur: handleTriggerBlur,
          onClick: handleTriggerClick,
          onFocus: handleTriggerFocus,
          onMouseLeave: handleTriggerMouseLeave,
          onMouseEnter: handleTriggerMouseEnter,
          ref: triggerRef,
        })}
    </>
  )
}

Portal.displayName = 'Portal'
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

Portal.Inner = PortalInner

export default Portal
