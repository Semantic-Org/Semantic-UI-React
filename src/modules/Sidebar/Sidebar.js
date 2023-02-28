import { EventListener, documentRef } from '@fluentui/react-component-event-listener'
import cx from 'clsx'
import _ from 'lodash'
import PropTypes from 'prop-types'
import React from 'react'

import {
  childrenUtils,
  customPropTypes,
  doesNodeContainClick,
  getUnhandledProps,
  getElementType,
  isRefObject,
  useKeyOnly,
  useIsomorphicLayoutEffect,
  useEventCallback,
  useForceUpdate,
  useMergedRefs,
  usePrevious,
} from '../../lib'
import SidebarPushable from './SidebarPushable'
import SidebarPusher from './SidebarPusher'

/**
 * We use `animationTick` to understand when an animation should be scheduled.
 *
 * @param {Boolean} visible
 */
function useAnimationTick(visible) {
  const previousVisible = usePrevious(visible)
  const tickIncrement = !!visible === !!previousVisible ? 0 : 1

  const animationTick = React.useRef(0)
  const forceUpdate = useForceUpdate()

  const currentTick = animationTick.current + tickIncrement
  const resetAnimationTick = React.useCallback(() => {
    animationTick.current = 0
    forceUpdate()
  }, [])

  React.useEffect(() => {
    animationTick.current = currentTick
  })

  return [currentTick, resetAnimationTick]
}

/**
 * A sidebar hides additional content beside a page.
 */
const Sidebar = React.forwardRef((props, ref) => {
  const { animation, className, children, content, direction, target, visible, width } = props

  const [animationTick, resetAnimationTick] = useAnimationTick(visible)
  const elementRef = useMergedRefs(ref, React.useRef())

  const animationTimer = React.useRef()
  const skipNextCallback = React.useRef()

  const handleAnimationEnd = useEventCallback(() => {
    const callback = visible ? 'onShow' : 'onHidden'

    resetAnimationTick()
    _.invoke(props, callback, null, props)
  })

  const handleAnimationStart = useEventCallback(() => {
    const callback = visible ? 'onVisible' : 'onHide'

    clearTimeout(animationTimer.current)
    animationTimer.current = setTimeout(handleAnimationEnd, Sidebar.animationDuration)

    if (skipNextCallback.current) {
      skipNextCallback.current = false
      return
    }

    _.invoke(props, callback, null, props)
  })

  const handleDocumentClick = (e) => {
    if (!doesNodeContainClick(elementRef.current, e)) {
      skipNextCallback.current = true
      _.invoke(props, 'onHide', e, { ...props, visible: false })
    }
  }

  useIsomorphicLayoutEffect(() => {
    handleAnimationStart()
  }, [animationTick])

  React.useEffect(() => {
    return () => {
      clearTimeout(animationTimer.current)
    }
  }, [])

  const classes = cx(
    'ui',
    animation,
    direction,
    width,
    useKeyOnly(animationTick > 0, 'animating'),
    useKeyOnly(visible, 'visible'),
    'sidebar',
    className,
  )
  const rest = getUnhandledProps(Sidebar, props)
  const ElementType = getElementType(Sidebar, props)
  const targetProp = isRefObject(target) ? { targetRef: target } : { target }

  return (
    <>
      <ElementType {...rest} className={classes} ref={elementRef}>
        {childrenUtils.isNil(children) ? content : children}
      </ElementType>

      {visible && <EventListener listener={handleDocumentClick} type='click' {...targetProp} />}
    </>
  )
})

Sidebar.displayName = 'Sidebar'
Sidebar.propTypes = {
  /** An element type to render as (string or function). */
  as: PropTypes.elementType,

  /** Animation style. */
  animation: PropTypes.oneOf([
    'overlay',
    'push',
    'scale down',
    'uncover',
    'slide out',
    'slide along',
  ]),

  /** Primary content. */
  children: PropTypes.node,

  /** Additional classes. */
  className: PropTypes.string,

  /** Shorthand for primary content. */
  content: customPropTypes.contentShorthand,

  /** Direction the sidebar should appear on. */
  direction: PropTypes.oneOf(['top', 'right', 'bottom', 'left']),

  /**
   * Called before a sidebar begins to animate out.
   *
   * @param {SyntheticEvent} event - React's original SyntheticEvent.
   * @param {object} data - All props.
   */
  onHide: PropTypes.func,

  /**
   * Called after a sidebar has finished animating out.
   *
   * @param {null}
   * @param {object} data - All props.
   */
  onHidden: PropTypes.func,

  /**
   * Called when a sidebar has finished animating in.
   *
   * @param {null}
   * @param {object} data - All props.
   */
  onShow: PropTypes.func,

  /**
   * Called when a sidebar begins animating in.
   *
   * @param {null}
   * @param {object} data - All props.
   */
  onVisible: PropTypes.func,

  /** A sidebar can handle clicks on the passed element. */
  target: PropTypes.oneOfType([customPropTypes.domNode, customPropTypes.refObject]),

  /** Controls whether or not the sidebar is visible on the page. */
  visible: PropTypes.bool,

  /** Sidebar width. */
  width: PropTypes.oneOf(['very thin', 'thin', 'wide', 'very wide']),
}

Sidebar.defaultProps = {
  direction: 'left',
  target: documentRef,
  visible: false,
}

Sidebar.animationDuration = 500

Sidebar.Pushable = SidebarPushable
Sidebar.Pusher = SidebarPusher

export default Sidebar
