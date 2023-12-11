import _ from 'lodash'
import PropTypes from 'prop-types'
import React from 'react'

import {
  getElementType,
  getUnhandledProps,
  makeDebugger,
  SUI,
  useEventCallback,
  useForceUpdate,
} from '../../lib'
import { getChildMapping, mergeChildMappings } from './utils/childMapping'
import wrapChild from './utils/wrapChild'

const debug = makeDebugger('transition_group')

/**
 * Wraps all children elements with proper callbacks and props.
 *
 * @param {React.ReactNode} children
 * @param {Stream} animation
 * @param {Number|String|Object} duration
 * @param {Boolean} directional
 *
 * @return {Object}
 */
function useWrappedChildren(children, animation, duration, directional) {
  debug('wrapChildren()')

  const forceUpdate = useForceUpdate()
  const previousChildren = React.useRef()

  let wrappedChildren
  React.useEffect(() => {
    previousChildren.current = wrappedChildren
  })

  const handleChildHide = useEventCallback((nothing, childProps) => {
    debug('handleOnHide', childProps)
    const { reactKey } = childProps

    delete previousChildren.current[reactKey]
    forceUpdate()
  })

  // A short circuit for an initial render as there will be no `prevMapping`
  if (typeof previousChildren.current === 'undefined') {
    wrappedChildren = _.mapValues(getChildMapping(children), (child) =>
      wrapChild(child, handleChildHide, {
        animation,
        duration,
        directional,
      }),
    )
  } else {
    const nextMapping = getChildMapping(children)
    wrappedChildren = mergeChildMappings(previousChildren.current, nextMapping)

    _.forEach(wrappedChildren, (child, key) => {
      const hasPrev = previousChildren.current[key]
      const hasNext = nextMapping[key]

      const prevChild = previousChildren.current[key]
      const isLeaving = !_.get(prevChild, 'props.visible')

      // Heads up!
      // An item is new (entering), it will be picked from `nextChildren`, so it should be wrapped
      if (hasNext && (!hasPrev || isLeaving)) {
        wrappedChildren[key] = wrapChild(child, handleChildHide, {
          animation,
          duration,
          directional,
          transitionOnMount: true,
        })
        return
      }

      // Heads up!
      // An item is old (exiting), it will be picked from `prevChildren`, so it has been already
      // wrapped, so should be only updated
      if (!hasNext && hasPrev && !isLeaving) {
        wrappedChildren[key] = React.cloneElement(prevChild, { visible: false })
        return
      }

      // Heads up!
      // An item item hasn't changed transition states, but it will be picked from `nextChildren`,
      // so we should wrap it again
      const {
        props: { visible, transitionOnMount },
      } = prevChild

      wrappedChildren[key] = wrapChild(child, handleChildHide, {
        animation,
        duration,
        directional,
        transitionOnMount,
        visible,
      })
    })
  }

  return wrappedChildren
}

/**
 * A Transition.Group animates children as they mount and unmount.
 */
const TransitionGroup = React.forwardRef(function (props, ref) {
  debug('render')
  debug('props', props)

  const children = useWrappedChildren(
    props.children,
    props.animation,
    props.duration,
    props.directional,
  )

  const ElementType = getElementType(TransitionGroup, props)
  const rest = getUnhandledProps(TransitionGroup, props)

  return (
    <ElementType {...rest} ref={ref}>
      {_.values(children)}
    </ElementType>
  )
})

TransitionGroup.displayName = 'TransitionGroup'
TransitionGroup.propTypes = {
  /** An element type to render as (string or function). */
  as: PropTypes.elementType,

  /** Named animation event to used. Must be defined in CSS. */
  animation: PropTypes.oneOfType([PropTypes.oneOf(SUI.TRANSITIONS), PropTypes.string]),

  /** Primary content. */
  children: PropTypes.node,

  /** Whether it is directional animation event or not. Use it only for custom transitions. */
  directional: PropTypes.bool,

  /** Duration of the CSS transition animation in milliseconds. */
  duration: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.shape({
      hide: PropTypes.number.isRequired,
      show: PropTypes.number.isRequired,
    }),
    PropTypes.string,
  ]),
}

TransitionGroup.defaultProps = {
  as: React.Fragment,
  animation: 'fade',
  duration: 500,
}

export default TransitionGroup
