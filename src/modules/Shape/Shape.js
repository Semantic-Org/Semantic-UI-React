import cx from 'classnames'
import React, { Component, PropTypes } from 'react'

import {
  customPropTypes,
  getElementType,
  getUnhandledProps,
  META,
} from '../../lib'

/**
* A shape is a three dimensional object displayed on a two dimensional plane.
*/
export default class Shape extends Component {
  static propTypes = {
    /** An element type to render as (string or function). */
    as: customPropTypes.as,

    /** Primary content. */
    children: PropTypes.node,

    /** Additional classes. */
    className: PropTypes.string,
  }

  static _meta = {
    name: 'Shape',
    type: META.TYPES.MODULE,
  }

  render() {
    const {
      children,
      className,
    } = this.props

    const classes = cx(
      'ui',
      'shape',
      className,
    )

    const rest = getUnhandledProps(Shape, this.props)
    const ElementType = getElementType(Shape, this.props)

    return (
      <ElementType {...rest} className={classes}>{children}</ElementType>
    )
  }
}
