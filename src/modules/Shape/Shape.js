import cx from 'classnames'
import _ from 'lodash'
import PropTypes from 'prop-types'
import React, { Component } from 'react'

import {
  customPropTypes,
  getElementType,
  getUnhandledProps,
  META,
  useKeyOnly,
} from '../../lib'
import ShapeSide from './ShapeSide'

/**
 * A shape is a three dimensional object displayed on a two dimensional plane.
 */
export default class Shape extends Component {
  static propTypes = {
    /** An element type to render as (string or function). */
    as: customPropTypes.as,

    /** Index of the currently active item. */
    activeIndex: PropTypes.number,

    /** Named animation event to used. */
    animation: PropTypes.oneOf(['flip left', 'flip up', 'flip down', 'flip right', 'flip over', 'flip back']),

    /** Additional classes. */
    className: PropTypes.string,

    /** A cube shape is formatted so that each side is the face of a cube. */
    cube: PropTypes.bool,

    /** Duration of side change animation in ms. */
    duration: PropTypes.oneOfType([
      PropTypes.number,
      PropTypes.string,
    ]),

    /** Shorthand array of props for Shape.Side. */
    items: customPropTypes.collectionShorthand,

    /** A text shape is formatted to allow for sides of text to be displayed. */
    text: PropTypes.bool,
  }

  static defaultProps = {
    duration: 7000,
  }

  static _meta = {
    name: 'Shape',
    type: META.TYPES.MODULE,
  }

  static Side = ShapeSide

  state = {}

  componentWillReceiveProps(nextProps) {
    const { activeIndex: prevIndex } = this.props
    const { activeIndex, duration } = nextProps

    if(activeIndex === prevIndex) return
    this.setState({
      activeIndex,
      prevIndex,
      animating: true,
    }, () => setTimeout(this.completeAnimation, duration))
  }

  completeAnimation = () => {
    this.setState({ animating: false, prevIndex: null })
  }

  renderItems = () => {
    const { duration, items } = this.props
    const { activeIndex, animating, prevIndex } = this.state

    return _.map(items, (item, index) => ShapeSide.create(item, {
      defaultProps: {
        duration,
        animating: animating && index === prevIndex,
        active: index === activeIndex,
        hidden: animating && index === activeIndex,
      },
    }))
  }

  render() {
    const { className, cube } = this.props

    const classes = cx(
      'ui',
      useKeyOnly(cube, 'cube'),
      'shape',
      className,
    )
    const rest = getUnhandledProps(Shape, this.props)
    const ElementType = getElementType(Shape, this.props)

    return (
      <ElementType {...rest} className={classes}>
        <div className='sides'>
          {this.renderItems()}
        </div>
      </ElementType>
    )
  }
}
