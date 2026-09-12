import PropTypes from 'prop-types'
import * as React from 'react'

import {
  customPropTypes,
  doesNodeContainClick,
  makeDebugger,
  useAutoControlledValue,
  useEventCallback,
} from '../../../dropdown/lib'
import useTrigger from './utils/useTrigger'
import PortalInner from './PortalInner'

const debug = makeDebugger('portal')

const noop = () => {}

/**
 * A component that allows you to render children outside their parent.
 * @see Modal
 * @see Popup
 * @see Dimmer
 * @see Confirm
 */

const Portal = React.forwardRef(
  (
    {
      children,
      closeOnDocumentClick = true,
      closeOnEscape = true,
      closeOnPortalMouseLeave = false,
      closeOnTriggerBlur = false,
      closeOnTriggerClick = true,
      closeOnTriggerMouseLeave = false,
      defaultOpen = false,
      hideOnScroll = false,
      mountNode = null,
      mouseEnterDelay = 0,
      mouseLeaveDelay = 0,
      onClose = noop,
      onMount = noop,
      onOpen = noop,
      onUnmount = noop,
      open: openProp,
      openOnTriggerClick = true,
      openOnTriggerFocus = false,
      openOnTriggerMouseEnter = false,
      trigger = null,
      triggerRef = noop,
    },
    ref
  ) => {
    const componentProps = {
      children,
      closeOnDocumentClick,
      closeOnEscape,
      closeOnPortalMouseLeave,
      closeOnTriggerBlur,
      closeOnTriggerClick,
      closeOnTriggerMouseLeave,
      defaultOpen,
      hideOnScroll,
      mountNode,
      mouseEnterDelay,
      mouseLeaveDelay,
      onClose,
      onMount,
      onOpen,
      onUnmount,
      open: openProp,
      openOnTriggerClick,
      openOnTriggerFocus,
      openOnTriggerMouseEnter,
      trigger,
      triggerRef,
    }

    const [openState, setOpen] = useAutoControlledValue({
      state: openProp,
      defaultState: defaultOpen,
      initialState: false,
    })

    const internalContentRef = React.useRef()
    const [triggerNodeRef, triggerElement] = useTrigger(trigger, triggerRef)

    const mouseEnterTimer = React.useRef()
    const mouseLeaveTimer = React.useRef()
    const latestDocumentMouseDownEvent = React.useRef()

    const setRefs = React.useCallback(
      (node) => {
        internalContentRef.current = node

        if (typeof ref === 'function') {
          ref(node)
        } else if (ref) {
          ref.current = node
        }
      },
      [ref]
    )

    // Behavior
    const openPortal = useEventCallback((e) => {
      debug('open()')
      setOpen(true)
      onOpen?.(e, { ...componentProps, open: true })
    })

    const openPortalWithTimeout = (e, delay) => {
      debug('openWithTimeout()', delay)
      const eventClone = { ...e }
      mouseEnterTimer.current = setTimeout(() => {
        return openPortal(eventClone)
      }, delay)
    }

    const closePortal = useEventCallback((e) => {
      debug('close()')
      setOpen(false)
      onClose?.(e, { ...componentProps, open: false })
    })

    const closePortalWithTimeout = (e, delay) => {
      debug('closeWithTimeout()', delay)
      const eventClone = { ...e }
      mouseLeaveTimer.current = setTimeout(() => {
        return closePortal(eventClone)
      }, delay)
    }

    // Event Handlers
    React.useEffect(() => {
      if (!openState) {
        return undefined
      }
      const handleDocumentMouseDown = (e) => {
        latestDocumentMouseDownEvent.current = e
      }
      const handleDocumentClick = (e) => {
        const currentMouseDownEvent = latestDocumentMouseDownEvent.current
        latestDocumentMouseDownEvent.current = null
        const isInsideTrigger = doesNodeContainClick(triggerNodeRef.current, e)

        const isOriginatedFromPortal =
          currentMouseDownEvent &&
          doesNodeContainClick(
            internalContentRef.current,
            currentMouseDownEvent
          )
        const isInsidePortal = doesNodeContainClick(
          internalContentRef.current,
          e
        )

        if (
          !internalContentRef.current ||
          isInsideTrigger ||
          isOriginatedFromPortal ||
          isInsidePortal
        ) {
          return
        }
        if (closeOnDocumentClick) {
          debug('handleDocumentClick()')
          closePortal(e)
        }
      }
      const handleEscape = (e) => {
        if (!closeOnEscape) return
        if (e.key === 'Escape') {
          debug('handleEscape()')
          closePortal(e)
        }
      }
      document.addEventListener('mousedown', handleDocumentMouseDown)
      document.addEventListener('click', handleDocumentClick)
      document.addEventListener('keydown', handleEscape)
      return () => {
        document.removeEventListener('mousedown', handleDocumentMouseDown)
        document.removeEventListener('click', handleDocumentClick)
        document.removeEventListener('keydown', handleEscape)
      }
    }, [
      openState,
      closeOnDocumentClick,
      closeOnEscape,
      closePortal,
      triggerNodeRef,
    ])

    React.useEffect(() => {
      if (!openState || !hideOnScroll) {
        return undefined
      }
      const handleScroll = (e) => {
        debug('handleHideOnScroll()')
        if (
          e.target instanceof Element &&
          internalContentRef.current?.contains(e.target)
        ) {
          return
        }
        closePortal(e)
      }
      window.addEventListener('scroll', handleScroll, {
        capture: true,
        passive: true,
      })
      return () => {
        window.removeEventListener('scroll', handleScroll, { capture: true })
      }
    }, [openState, hideOnScroll, closePortal])

    const handlePortalMouseLeave = useEventCallback((e) => {
      if (!closeOnPortalMouseLeave) return
      if (e.target !== internalContentRef.current) return
      debug('handlePortalMouseLeave()')
      closePortalWithTimeout(e, mouseLeaveDelay)
    })

    const handlePortalMouseEnter = useEventCallback(() => {
      if (!closeOnPortalMouseLeave) return
      debug('handlePortalMouseEnter()')
      clearTimeout(mouseLeaveTimer.current)
    })

    React.useEffect(() => {
      if (!openState || !internalContentRef.current) {
        return undefined
      }
      const portalNode = internalContentRef.current
      portalNode.addEventListener('mouseleave', handlePortalMouseLeave)
      portalNode.addEventListener('mouseenter', handlePortalMouseEnter)
      return () => {
        portalNode.removeEventListener('mouseleave', handlePortalMouseLeave)
        portalNode.removeEventListener('mouseenter', handlePortalMouseEnter)
      }
    }, [openState, handlePortalMouseLeave, handlePortalMouseEnter])

    const handleTriggerBlur = (e, ...rest) => {
      triggerElement.props.onBlur?.(e, ...rest)
      const target = e.relatedTarget || document.activeElement
      const didFocusPortal = internalContentRef.current?.contains(target)
      if (!closeOnTriggerBlur || didFocusPortal) return
      debug('handleTriggerBlur()')
      closePortal(e)
    }

    const handleTriggerClick = (e, ...rest) => {
      triggerElement.props.onClick?.(e, ...rest)
      if (openState && closeOnTriggerClick) {
        debug('handleTriggerClick() - close')
        closePortal(e)
      } else if (!openState && openOnTriggerClick) {
        debug('handleTriggerClick() - open')
        openPortal(e)
      }
    }

    const handleTriggerFocus = (e, ...rest) => {
      triggerElement.props.onFocus?.(e, ...rest)
      if (!openOnTriggerFocus) return
      debug('handleTriggerFocus()')
      openPortal(e)
    }

    const handleTriggerMouseLeave = (e, ...rest) => {
      clearTimeout(mouseEnterTimer.current)
      triggerElement.props.onMouseLeave?.(e, ...rest)
      if (!closeOnTriggerMouseLeave) return
      debug('handleTriggerMouseLeave()')
      closePortalWithTimeout(e, mouseLeaveDelay)
    }

    const handleTriggerMouseEnter = (e, ...rest) => {
      clearTimeout(mouseLeaveTimer.current)
      triggerElement.props.onMouseEnter?.(e, ...rest)
      if (!openOnTriggerMouseEnter) return
      debug('handleTriggerMouseEnter()')
      openPortalWithTimeout(e, mouseEnterDelay)
    }

    React.useEffect(() => {
      return () => {
        clearTimeout(mouseEnterTimer.current)
        clearTimeout(mouseLeaveTimer.current)
      }
    }, [])

    return (
      <>
        {openState && (
          <PortalInner
            mountNode={mountNode}
            onMount={() => {
              return onMount?.(null, componentProps)
            }}
            onUnmount={() => {
              return onUnmount?.(null, componentProps)
            }}
            ref={setRefs}
          >
            {children}
          </PortalInner>
        )}
        {triggerElement &&
          React.cloneElement(triggerElement, {
            onBlur: handleTriggerBlur,
            onClick: handleTriggerClick,
            onFocus: handleTriggerFocus,
            onMouseLeave: handleTriggerMouseLeave,
            onMouseEnter: handleTriggerMouseEnter,
            ref: triggerNodeRef,
          })}
      </>
    )
  }
)

Portal.displayName = 'Portal'

Portal.handledProps = [
  'children',
  'closeOnDocumentClick',
  'closeOnEscape',
  'closeOnPortalMouseLeave',
  'closeOnTriggerBlur',
  'closeOnTriggerClick',
  'closeOnTriggerMouseLeave',
  'defaultOpen',
  'hideOnScroll',
  'mountNode',
  'mouseEnterDelay',
  'mouseLeaveDelay',
  'onClose',
  'onMount',
  'onOpen',
  'onUnmount',
  'open',
  'openOnTriggerClick',
  'openOnTriggerFocus',
  'openOnTriggerMouseEnter',
  'trigger',
  'triggerRef',
]

Portal.propTypes = {
  children: PropTypes.node.isRequired,
  closeOnDocumentClick: PropTypes.bool,
  closeOnEscape: PropTypes.bool,
  closeOnPortalMouseLeave: PropTypes.bool,
  closeOnTriggerBlur: PropTypes.bool,
  closeOnTriggerClick: PropTypes.bool,
  closeOnTriggerMouseLeave: PropTypes.bool,
  defaultOpen: PropTypes.bool,
  hideOnScroll: PropTypes.bool,
  mountNode: PropTypes.instanceOf(Element),
  mouseEnterDelay: PropTypes.number,
  mouseLeaveDelay: PropTypes.number,
  onClose: PropTypes.func,
  onMount: PropTypes.func,
  onOpen: PropTypes.func,
  onUnmount: PropTypes.func,
  open: PropTypes.bool,
  openOnTriggerClick: PropTypes.bool,
  openOnTriggerFocus: PropTypes.bool,
  openOnTriggerMouseEnter: PropTypes.bool,
  trigger: PropTypes.node,
  triggerRef: customPropTypes.ref,
}

Portal.Inner = PortalInner

export default Portal
