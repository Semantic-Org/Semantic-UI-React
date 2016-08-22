import React, { Component, PropTypes } from 'react'
import classNames from 'classnames'

import { getElementType, getUnhandledProps, META } from '../../lib'
import { Header } from '../'
import Segments from './SegmentSegments'

/**
 * A segment is used to create a grouping of related content.
 */
export default class Segment extends Component {
  static propTypes = {
    /** An element type to render as (string or function). */
    as: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.func,
    ]),

    /**
     * Segment tag body content.
     */
    children: PropTypes.node,
    className: PropTypes.string,
    /**
     * Optional segment heading.
     */
    heading: PropTypes.any,
  }

  static _meta = {
    name: 'Segment',
    type: META.TYPES.ELEMENT,
  }

  static Segments = Segments

  render() {
    const heading = <Header as='h4'>{this.props.heading}</Header>
    const classes = classNames(
      'ui',
      this.props.className,
      'segment'
    )

    const rest = getUnhandledProps(Segment, this.props)
    const ElementType = getElementType(Segment, this.props)

    return (
      <ElementType {...rest} className={classes}>
        {this.props.heading && heading}
        {this.props.children}
      </ElementType>
    )
  }
}
