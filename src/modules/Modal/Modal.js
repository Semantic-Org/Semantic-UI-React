import cx from 'clsx'
import _ from 'lodash'
import PropTypes from 'prop-types'
import React from 'react'
import shallowEqual from 'shallowequal'

import {
  childrenUtils,
  customPropTypes,
  doesNodeContainClick,
  eventStack,
  getElementType,
  getUnhandledProps,
  isBrowser,
  makeDebugger,
  useKeyOnly,
  useAutoControlledValue,
  useMergedRefs,
} from '../../lib'
import Icon from '../../elements/Icon'
import Portal from '../../addons/Portal'
import ModalActions from './ModalActions'
import ModalContent from './ModalContent'
import ModalDescription from './ModalDescription'
import ModalDimmer from './ModalDimmer'
import ModalHeader from './ModalHeader'
import { canFit, getLegacyStyles, isLegacy } from './utils'

const debug = makeDebugger('modal')

/**
 * A modal displays content that temporarily blocks interactions with the main view of a site.
 * @see Confirm
 * @see Portal
 */
const Modal = React.forwardRef(function (props, ref) {
  const {
    actions,
    basic,
    centered,
    children,
    className,
    closeIcon,
    closeOnDimmerClick,
    closeOnDocumentClick,
    content,
    dimmer,
    eventPool,
    header,
    size,
    style,
    trigger,
  } = props
  // Do not access document when server side rendering
  const mountNode = isBrowser() ? props.mountNode || document.body : null

  const [open, setOpen] = useAutoControlledValue({
    state: props.open,
    defaultState: props.defaultOpen,
    initialState: false,
  })

  const [legacyStyles, setLegacyStyles] = React.useState({})
  const [scrolling, setScrolling] = React.useState(false)

  const [legacy] = React.useState(() => isBrowser() && isLegacy())

  const elementRef = useMergedRefs(ref, React.useRef())
  const dimmerRef = React.useRef()

  const animationRequestId = React.useRef()
  const latestDocumentMouseDownEvent = React.useRef()

  React.useEffect(() => {
    return () => {
      cancelAnimationFrame(animationRequestId.current)
      latestDocumentMouseDownEvent.current = null
    }
  }, [])

  // ----------------------------------------
  // Styles calc
  // ----------------------------------------

  const setPositionAndClassNames = () => {
    if (elementRef.current) {
      const rect = elementRef.current.getBoundingClientRect()
      const isFitted = canFit(rect)

      setScrolling(!isFitted)

      // Styles should be computed for IE11
      const computedLegacyStyles = legacy ? getLegacyStyles(isFitted, centered, rect) : {}

      if (!shallowEqual(computedLegacyStyles, computedLegacyStyles)) {
        setLegacyStyles(computedLegacyStyles)
      }
    }

    animationRequestId.current = requestAnimationFrame(setPositionAndClassNames)
  }

  // ----------------------------------------
  // Document Event Handlers
  // ----------------------------------------

  const handleClose = (e) => {
    debug('close()')

    setOpen(false)
    _.invoke(props, 'onClose', e, { ...props, open: false })
  }

  const handleDocumentMouseDown = (e) => {
    latestDocumentMouseDownEvent.current = e
  }

  const handleDocumentClick = (e) => {
    debug('handleDocumentClick()')

    const currentDocumentMouseDownEvent = latestDocumentMouseDownEvent.current
    latestDocumentMouseDownEvent.current = null

    if (
      !closeOnDimmerClick ||
      doesNodeContainClick(elementRef.current, currentDocumentMouseDownEvent) ||
      doesNodeContainClick(elementRef.current, e)
    )
      return

    setOpen(false)
    _.invoke(props, 'onClose', e, { ...props, open: false })
  }

  const handleOpen = (e) => {
    debug('open()')

    setOpen(true)
    _.invoke(props, 'onOpen', e, { ...props, open: true })
  }

  const handlePortalMount = (e) => {
    debug('handlePortalMount()', { eventPool })

    setScrolling(false)
    setPositionAndClassNames()

    eventStack.sub('mousedown', handleDocumentMouseDown, {
      pool: eventPool,
      target: dimmerRef.current,
    })
    eventStack.sub('click', handleDocumentClick, {
      pool: eventPool,
      target: dimmerRef.current,
    })
    _.invoke(props, 'onMount', e, props)
  }

  const handlePortalUnmount = (e) => {
    debug('handlePortalUnmount()', { eventPool })

    cancelAnimationFrame(animationRequestId.current)
    eventStack.unsub('mousedown', handleDocumentMouseDown, {
      pool: eventPool,
      target: dimmerRef.current,
    })
    eventStack.unsub('click', handleDocumentClick, {
      pool: eventPool,
      target: dimmerRef.current,
    })
    _.invoke(props, 'onUnmount', e, props)
  }

  // ----------------------------------------
  // Render
  // ----------------------------------------

  const renderContent = (rest) => {
    const classes = cx(
      'ui',
      size,
      useKeyOnly(basic, 'basic'),
      useKeyOnly(legacy, 'legacy'),
      useKeyOnly(scrolling, 'scrolling'),
      'modal transition visible active',
      className,
    )
    const ElementType = getElementType(Modal, props)

    const closeIconName = closeIcon === true ? 'close' : closeIcon
    const closeIconJSX = Icon.create(closeIconName, {
      overrideProps: (predefinedProps) => ({
        onClick: (e) => {
          _.invoke(predefinedProps, 'onClick', e)
          handleClose(e)
        },
      }),
    })

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
              overrideProps: (predefinedProps) => ({
                onActionClick: (e, actionProps) => {
                  _.invoke(predefinedProps, 'onActionClick', e, actionProps)
                  _.invoke(props, 'onActionClick', e, props)

                  handleClose(e)
                },
              }),
            })}
          </>
        ) : (
          children
        )}
      </ElementType>
    )
  }

  // Short circuit when server side rendering
  if (!isBrowser()) {
    return React.isValidElement(trigger) ? trigger : null
  }

  const unhandled = getUnhandledProps(Modal, props)
  const portalPropNames = Portal.handledProps

  const rest = _.reduce(
    unhandled,
    (acc, val, key) => {
      if (!_.includes(portalPropNames, key)) acc[key] = val

      return acc
    },
    {},
  )
  const portalProps = _.pick(unhandled, portalPropNames)

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
      {ModalDimmer.create(_.isPlainObject(dimmer) ? dimmer : {}, {
        autoGenerateKey: false,
        defaultProps: {
          blurring: dimmer === 'blurring',
          inverted: dimmer === 'inverted',
        },
        overrideProps: {
          children: renderContent(rest),
          centered,
          mountNode,
          scrolling,
          ref: dimmerRef,
        },
      })}
    </Portal>
  )
})

Modal.displayName = 'Modal'
Modal.propTypes = {
  /** An element type to render as (string or function). */
  as: PropTypes.elementType,

  /** Shorthand for Modal.Actions. Typically an array of button shorthand. */
  actions: customPropTypes.itemShorthand,

  /** A modal can reduce its complexity */
  basic: PropTypes.bool,

  /** A modal can be vertically centered in the viewport */
  centered: PropTypes.bool,

  /** Primary content. */
  children: PropTypes.node,

  /** Additional classes. */
  className: PropTypes.string,

  /** Shorthand for the close icon. Closes the modal on click. */
  closeIcon: PropTypes.oneOfType([PropTypes.node, PropTypes.object, PropTypes.bool]),

  /** Whether or not the Modal should close when the dimmer is clicked. */
  closeOnDimmerClick: PropTypes.bool,

  /** Whether or not the Modal should close when the document is clicked. */
  closeOnDocumentClick: PropTypes.bool,

  /** Simple text content for the Modal. */
  content: customPropTypes.itemShorthand,

  /** Initial value of open. */
  defaultOpen: PropTypes.bool,

  /** A Modal can appear in a dimmer. */
  dimmer: PropTypes.oneOfType([
    PropTypes.bool,
    PropTypes.func,
    PropTypes.object,
    PropTypes.oneOf(['inverted', 'blurring']),
  ]),

  /** Event pool namespace that is used to handle component events */
  eventPool: PropTypes.string,

  /** Modal displayed above the content in bold. */
  header: customPropTypes.itemShorthand,

  /** The node where the modal should mount. Defaults to document.body. */
  mountNode: PropTypes.any,

  /**
   * Action onClick handler when using shorthand `actions`.
   *
   * @param {SyntheticEvent} event - React's original SyntheticEvent.
   * @param {object} data - All props.
   */
  onActionClick: PropTypes.func,

  /**
   * Called when a close event happens.
   *
   * @param {SyntheticEvent} event - React's original SyntheticEvent.
   * @param {object} data - All props.
   */
  onClose: PropTypes.func,

  /**
   * Called when the modal is mounted on the DOM.
   *
   * @param {null}
   * @param {object} data - All props.
   */
  onMount: PropTypes.func,

  /**
   * Called when an open event happens.
   *
   * @param {SyntheticEvent} event - React's original SyntheticEvent.
   * @param {object} data - All props.
   */
  onOpen: PropTypes.func,

  /**
   * Called when the modal is unmounted from the DOM.
   *
   * @param {null}
   * @param {object} data - All props.
   */
  onUnmount: PropTypes.func,

  /** Controls whether or not the Modal is displayed. */
  open: PropTypes.bool,

  /** A modal can vary in size */
  size: PropTypes.oneOf(['mini', 'tiny', 'small', 'large', 'fullscreen']),

  /** Custom styles. */
  style: PropTypes.object,

  /** Element to be rendered in-place where the modal is defined. */
  trigger: PropTypes.node,

  /**
   * NOTE: Any unhandled props that are defined in Modal are passed-through
   * to the inner Portal.
   */
}

Modal.defaultProps = {
  centered: true,
  dimmer: true,
  closeOnDimmerClick: true,
  closeOnDocumentClick: false,
  eventPool: 'Modal',
}

Modal.Actions = ModalActions
Modal.Content = ModalContent
Modal.Description = ModalDescription
Modal.Dimmer = ModalDimmer
Modal.Header = ModalHeader

export default Modal
