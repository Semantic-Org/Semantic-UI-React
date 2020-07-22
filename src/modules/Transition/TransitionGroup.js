import _ from 'lodash'
import PropTypes from 'prop-types'
import React from 'react'

import { getElementType, getUnhandledProps, makeDebugger, SUI } from '../../lib'
import { getChildMapping, mergeChildMappings } from './utils/childMapping'
import wrapChild from './utils/wrapChild'

const debug = makeDebugger('transition_group')

/**
 * A Transition.Group animates children as they mount and unmount.
 */
export default class TransitionGroup extends React.Component {
  static propTypes = {
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

  static defaultProps = {
    as: React.Fragment,
    animation: 'fade',
    duration: 500,
  }

  state = {
    // Keeping a callback under the state is a hack to make it accessible under getDerivedStateFromProps()
    handleOnHide: (nothing, childProps) => {
      debug('handleOnHide', childProps)
      const { reactKey } = childProps

      this.setState((state) => {
        const children = { ...state.children }
        delete children[reactKey]

        return { children }
      })
    },
  }

  static getDerivedStateFromProps(props, state) {
    debug('getDerivedStateFromProps()')

    const { animation, duration, directional } = props
    const { children: prevMapping } = state

    // A short circuit for an initial render as there will be no `prevMapping`
    if (typeof prevMapping === 'undefined') {
      return {
        children: _.mapValues(getChildMapping(props.children), (child) =>
          wrapChild(child, state.handleOnHide, {
            animation,
            duration,
            directional,
          }),
        ),
      }
    }

    const nextMapping = getChildMapping(props.children)
    const children = mergeChildMappings(prevMapping, nextMapping)

    _.forEach(children, (child, key) => {
      const hasPrev = _.has(prevMapping, key)
      const hasNext = _.has(nextMapping, key)

      const { [key]: prevChild } = prevMapping
      const isLeaving = !_.get(prevChild, 'props.visible')

      // Heads up!
      // An item is new (entering), it will be picked from `nextChildren`, so it should be wrapped
      if (hasNext && (!hasPrev || isLeaving)) {
        children[key] = wrapChild(child, state.handleOnHide, {
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
        children[key] = React.cloneElement(prevChild, { visible: false })
        return
      }

      // Heads up!
      // An item item hasn't changed transition states, but it will be picked from `nextChildren`,
      // so we should wrap it again
      const {
        props: { visible, transitionOnMount },
      } = prevChild

      children[key] = wrapChild(child, state.handleOnHide, {
        animation,
        duration,
        directional,
        transitionOnMount,
        visible,
      })
    })

    return { children }
  }

  render() {
    debug('render')
    debug('props', this.props)
    debug('state', this.state)

    const { children } = this.state
    const ElementType = getElementType(TransitionGroup, this.props)
    const rest = getUnhandledProps(TransitionGroup, this.props)

    return <ElementType {...rest}>{_.values(children)}</ElementType>
  }
}
