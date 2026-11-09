import cx from 'clsx'
import PropTypes from 'prop-types'
import * as React from 'react'
import {
  childrenUtils,
  customPropTypes,
  isBrowser,
  makeDebugger,
  getKeyOnly,
  useAutoControlledValue,
  useMergedRefs,
  getComponentType,
} from '../dropdown/lib'
import Portal from './addons/Portal/Portal'
import ModalActions from './ModalActions'
import ModalContent from './ModalContent'
import ModalDescription from './ModalDescription'
import ModalDimmer from './ModalDimmer'
import ModalHeader from './ModalHeader'
import { canFit, getLegacyStyles, isLegacy } from './utils'

const debug = makeDebugger('modal')

function shallowEqual(objA, objB) {
  if (objA === objB) return true
  if (
    typeof objA !== 'object' ||
    objA === null ||
    typeof objB !== 'object' ||
    objB === null
  ) {
    return false
  }
  const keysA = Object.keys(objA)
  const keysB = Object.keys(objB)
  if (keysA.length !== keysB.length) return false
  for (let i = 0; i < keysA.length; i++) {
    const key = keysA[i]
    if (
      !Object.prototype.hasOwnProperty.call(objB, key) ||
      objA[key] !== objB[key]
    ) {
      return false
    }
  }
  return true
}

const Modal = React.forwardRef((props, ref) => {
  const {
    actions,
    // Omit Semantic UI's element override prop from DOM props.
    // eslint-disable-next-line no-unused-vars
    as,
    basic,
    centered = true,
    children,
    className,
    closeIcon,
    closeOnDimmerClick = true,
    closeOnDocumentClick = false,
    content,
    defaultOpen,
    dimmer = true,
    eventPool = 'Modal',
    header,
    mountNode: mountNodeProp,
    onActionClick,
    onClose,
    onMount,
    onOpen,
    onUnmount,
    open: openProp,
    size,
    style,
    trigger,
    ...unhandledProps
  } = props

  const mountNode = isBrowser() ? mountNodeProp || document.body : null

  const [open, setOpen] = useAutoControlledValue({
    state: openProp,
    defaultState: defaultOpen,
    initialState: false,
  })

  const [legacyStyles, setLegacyStyles] = React.useState({})
  const [scrolling, setScrolling] = React.useState(false)
  const [legacy] = React.useState(() => {
    return isBrowser() && isLegacy()
  })

  const elementRef = useMergedRefs(ref, React.useRef())
  const dimmerRef = React.useRef()
  const animationRequestId = React.useRef()
  const mouseDownOnDimmer = React.useRef(false)

  const latestPropsRef = React.useRef(props)
  latestPropsRef.current = props

  const handleClose = React.useCallback(
    (e) => {
      debug('close()')
      setOpen(false)
      onClose?.(e, { ...latestPropsRef.current, open: false })
    },
    [onClose, setOpen]
  )

  const updatePositionAndClassNames = React.useCallback(() => {
    if (elementRef.current) {
      const rect = elementRef.current.getBoundingClientRect()
      const isFitted = canFit(rect)
      setScrolling((prevScrolling) => {
        return prevScrolling === !isFitted ? prevScrolling : !isFitted
      })
      const computedLegacyStyles = legacy
        ? getLegacyStyles(isFitted, centered, rect)
        : {}
      setLegacyStyles((prevLegacyStyles) => {
        return shallowEqual(prevLegacyStyles, computedLegacyStyles)
          ? prevLegacyStyles
          : computedLegacyStyles
      })
    }
  }, [centered, elementRef, legacy])

  const schedulePositionUpdate = React.useCallback(() => {
    cancelAnimationFrame(animationRequestId.current)
    animationRequestId.current = requestAnimationFrame(
      updatePositionAndClassNames
    )
  }, [updatePositionAndClassNames])

  React.useEffect(() => {
    if (!open) {
      return undefined
    }

    schedulePositionUpdate()
    window.addEventListener('resize', schedulePositionUpdate)

    let resizeObserver
    if (typeof ResizeObserver !== 'undefined' && elementRef.current) {
      resizeObserver = new ResizeObserver(schedulePositionUpdate)
      resizeObserver.observe(elementRef.current)
    }

    return () => {
      cancelAnimationFrame(animationRequestId.current)
      window.removeEventListener('resize', schedulePositionUpdate)
      resizeObserver?.disconnect()
    }
  }, [elementRef, open, schedulePositionUpdate])

  const handleOpen = (e) => {
    debug('open()')
    setOpen(true)
    onOpen?.(e, { ...props, open: true })
  }

  const handlePortalMount = (e) => {
    debug('handlePortalMount()')
    setScrolling(false)
    onMount?.(e, props)
  }

  const handlePortalUnmount = (e) => {
    debug('handlePortalUnmount()')
    cancelAnimationFrame(animationRequestId.current)
    onUnmount?.(e, props)
  }

  const handleDimmerMouseDown = (e) => {
    mouseDownOnDimmer.current = e.target === dimmerRef.current
  }

  const handleDimmerClick = (e) => {
    if (
      closeOnDimmerClick &&
      e.target === dimmerRef.current &&
      mouseDownOnDimmer.current
    ) {
      e.stopPropagation()
      handleClose(e)
    }
  }

  const portalPropNames = Portal.handledProps || []
  const portalProps = {}
  const rest = {}

  Object.entries(unhandledProps).forEach(([key, value]) => {
    if (portalPropNames.includes(key)) {
      portalProps[key] = value
    } else {
      rest[key] = value
    }
  })

  const renderCloseIcon = () => {
    const closeIconProp = closeIcon
    if (!closeIconProp) {
      return null
    }

    const iconNameOrProps = closeIconProp === true ? 'close' : closeIconProp

    if (React.isValidElement(iconNameOrProps)) {
      return React.cloneElement(iconNameOrProps, {
        onClick: (e) => {
          iconNameOrProps.props.onClick?.(e) // Call original onClick
          handleClose(e) // Call modal's handleClose
        },
      })
    }

    // 2. Shorthand (string or object)
    const iconProps =
      typeof iconNameOrProps === 'object'
        ? iconNameOrProps
        : { name: iconNameOrProps }

    const { name, className: iconClassName, ...restIconProps } = iconProps
    const iconClasses = cx(name || 'close', 'close', 'icon', iconClassName)

    return (
      <i
        {...restIconProps}
        aria-hidden="true"
        className={iconClasses}
        onClick={(e) => {
          restIconProps.onClick?.(e) // Call shorthand's onClick
          handleClose(e) // Call modal's handleClose
        }}
      />
    )
  }

  const renderContent = () => {
    const classes = cx(
      'ui',
      size,
      getKeyOnly(basic, 'basic'),
      getKeyOnly(legacy, 'legacy'),
      getKeyOnly(scrolling, 'scrolling'),
      'modal transition visible active',
      className
    )
    const ElementType = getComponentType(props)
    const closeIconJSX = renderCloseIcon()

    return (
      <ElementType
        {...rest}
        className={classes}
        ref={elementRef}
        style={{ ...legacyStyles, ...style }}
      >
        {closeIconJSX}
        {childrenUtils.isNil(children) ? (
          <>
            {ModalHeader.create(header, { autoGenerateKey: false })}
            {ModalContent.create(content, { autoGenerateKey: false })}
            {ModalActions.create(actions, {
              overrideProps: (predefinedProps) => {
                return {
                  onActionClick: (e, actionProps) => {
                    predefinedProps.onActionClick?.(e, actionProps)
                    onActionClick?.(e, props)
                    handleClose(e)
                  },
                }
              },
            })}
          </>
        ) : (
          children
        )}
      </ElementType>
    )
  }

  if (!isBrowser()) {
    return React.isValidElement(trigger) ? trigger : null
  }

  const isDimmerPlainObject =
    typeof dimmer === 'object' &&
    dimmer !== null &&
    dimmer.constructor === Object

  return (
    <Portal
      closeOnDocumentClick={closeOnDocumentClick}
      {...portalProps}
      trigger={trigger}
      eventPool={eventPool}
      mountNode={mountNode}
      open={open}
      onClose={handleClose}
      onMount={handlePortalMount}
      onOpen={handleOpen}
      onUnmount={handlePortalUnmount}
    >
      {ModalDimmer.create(isDimmerPlainObject ? dimmer : {}, {
        autoGenerateKey: false,
        defaultProps: {
          blurring: dimmer === 'blurring',
          inverted: dimmer === 'inverted',
        },
        overrideProps: {
          children: renderContent(),
          centered,
          mountNode,
          scrolling,
          ref: dimmerRef,
          onMouseDown: handleDimmerMouseDown,
          onClick: handleDimmerClick,
        },
      })}
    </Portal>
  )
})

Modal.displayName = 'Modal'
Modal.propTypes = {
  as: PropTypes.elementType,
  actions: customPropTypes.itemShorthand,
  basic: PropTypes.bool,
  centered: PropTypes.bool,
  children: PropTypes.node,
  className: PropTypes.string,
  closeIcon: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.object,
    PropTypes.bool,
  ]),
  closeOnDimmerClick: PropTypes.bool,
  closeOnDocumentClick: PropTypes.bool,
  content: customPropTypes.itemShorthand,
  defaultOpen: PropTypes.bool,
  dimmer: PropTypes.oneOfType([
    PropTypes.bool,
    PropTypes.func,
    PropTypes.object,
    PropTypes.oneOf(['inverted', 'blurring']),
  ]),
  eventPool: PropTypes.string,
  header: customPropTypes.itemShorthand,
  mountNode: PropTypes.instanceOf(isBrowser() ? Element : Object),
  onActionClick: PropTypes.func,
  onClose: PropTypes.func,
  onMount: PropTypes.func,
  onOpen: PropTypes.func,
  onUnmount: PropTypes.func,
  open: PropTypes.bool,
  size: PropTypes.oneOf(['mini', 'tiny', 'small', 'large', 'fullscreen']),
  style: PropTypes.objectOf(
    PropTypes.oneOfType([PropTypes.string, PropTypes.number])
  ),
  trigger: PropTypes.node,
}

Modal.Actions = ModalActions
Modal.Content = ModalContent
Modal.Description = ModalDescription
Modal.Dimmer = ModalDimmer
Modal.Header = ModalHeader

export default Modal
