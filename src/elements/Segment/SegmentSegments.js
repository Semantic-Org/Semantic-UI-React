import React, { Component, PropTypes } from 'react'
import classNames from 'classnames'
import META from '../../utils/Meta'
import { getUnhandledProps } from '../../utils/propUtils'

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
    type: META.type.element,
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
