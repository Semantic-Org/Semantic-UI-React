import React, { Component, PropTypes } from 'react'
import classNames from 'classnames'
import { getUnhandledProps, META } from '../../lib'

/**
 * A group of segments can be formatted to appear together.
 */
export default class SegmentSegments extends Component {
  static propTypes = {
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

    return (
      <div {...rest} className={classes}>
        {children}
      </div>
    )
  }
}
