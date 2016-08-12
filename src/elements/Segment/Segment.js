import React, { Component, PropTypes } from 'react'
import classNames from 'classnames'

import { getUnhandledProps, META } from '../../lib'
import { Header } from '../'
import Segments from './SegmentSegments'

/**
 * A segment is used to create a grouping of related content.
 */
export default class Segment extends Component {
  static propTypes = {
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
    const heading = <Header.H4>{this.props.heading}</Header.H4>
    const classes = classNames(
      'ui',
      this.props.className,
      'segment'
    )

    const rest = getUnhandledProps(Segment, this.props)

    return (
      <div {...rest} className={classes}>
        {this.props.heading && heading}
        {this.props.children}
      </div>
    )
  }
}
