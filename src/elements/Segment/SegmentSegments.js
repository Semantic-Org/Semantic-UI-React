import React, { Component, PropTypes } from 'react'
import classNames from 'classnames'
import { getElementType, getUnhandledProps, META } from '../../lib'

/**
 * A group of segments can be formatted to appear together.
 */
export default class SegmentSegments extends Component {
  static propTypes = {
    /** An element type to render as (string or function). */
    as: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.func,
    ]),

    children: PropTypes.node,
    className: PropTypes.string,
  }

  static _meta = {
    name: 'SegmentSegments',
    type: META.TYPES.ELEMENT,
    parent: 'Segment',
  }

  render() {
    const { children } = this.props

    const classes = classNames(
      'ui',
      this.props.className,
      'segments'
    )

    const rest = getUnhandledProps(SegmentSegments, this.props)
    const ElementType = getElementType(SegmentSegments, this.props)

    return (
      <ElementType {...rest} className={classes}>
        {children}
      </ElementType>
    )
  }
}
