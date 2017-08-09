import _ from 'lodash'
import PropTypes from 'prop-types'
import React, { cloneElement } from 'react'

import {
  customPropTypes,
  getChildMapping,
  getElementType,
  getUnhandledProps,
  makeDebugger,
  mergeChildMappings,
  META,
  SUI,
} from '../../lib'
import Transition from './Transition'

const debug = makeDebugger('transition_group')

/**
 * A Transition.Group animates children as they mount and unmount.
 */
export default class TransitionGroup extends React.Component {
  static propTypes = {
    /** An element type to render as (string or function). */
    as: customPropTypes.as,

    /** Named animation event to used. Must be defined in CSS. */
    animation: PropTypes.oneOf(SUI.TRANSITIONS),

    /** Primary content. */
    children: PropTypes.node,

    /** Duration of the CSS transition animation in milliseconds. */
    duration: PropTypes.number,
  }

  static defaultProps = {
    animation: 'fade',
    duration: 500,
  }

  static _meta = {
    name: 'TransitionGroup',
    parent: 'Transition',
    type: META.TYPES.MODULE,
  }

  constructor(...args) {
    super(...args)

    const { children } = this.props
    this.state = { children: _.mapValues(getChildMapping(children), child => this.wrapChild(child)) }
  }

  componentWillReceiveProps(nextProps) {
    debug('componentWillReceiveProps()')

    const { children: prevMapping } = this.state
    const nextMapping = getChildMapping(nextProps.children)
    const children = mergeChildMappings(prevMapping, nextMapping)

    _.forEach(children, (child, key) => {
      const hasPrev = _.has(prevMapping, key)
      const hasNext = _.has(nextMapping, key)
      const { [key]: prevChild } = prevMapping
      const isLeaving = !_.get(prevChild, 'props.visible')

      // item is new (entering), should be wrapped
      if (hasNext && (!hasPrev || isLeaving)) {
        children[key] = this.wrapChild(child, true)
        return
      }

      // item is old (exiting), should be updated
      if (!hasNext && hasPrev && !isLeaving) {
        children[key] = cloneElement(prevChild, { visible: false })
        return
      }

      // item hasn't changed transition states, copy over the last transition props;
      const { props: { visible, transitionOnMount } } = prevChild

      children[key] = cloneElement(child, { visible, transitionOnMount })
    })

    this.setState({ children })
  }

  handleOnHide = (nothing, childProps) => {
    debug('handleOnHide', childProps)
    const { reactKey } = childProps

    this.setState(state => {
      const children = { ...state.children }
      delete children[reactKey]

      return { children }
    })
  }

  wrapChild = (child, transitionOnMount = false) => {
    const { animation, duration } = this.props
    const { key } = child

    return (
      <Transition
        animation={animation}
        children={child}
        duration={duration}
        key={key}
        onHide={this.handleOnHide}
        reactKey={key}
        transitionOnMount={transitionOnMount}
      />
    )
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
