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
    duration: 700,
  }

  static _meta = {
    name: 'Shape',
    type: META.TYPES.MODULE,
  }

  static Side = ShapeSide

  renderSides = () => {
    const { items } = this.props

    return _.map(items, side => ShapeSide.create(side))
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
          {this.renderSides()}
        </div>
      </ElementType>
    )
  }
}
