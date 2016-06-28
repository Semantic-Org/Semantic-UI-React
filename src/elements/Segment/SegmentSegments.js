import React, { Component, PropTypes } from 'react'
import classNames from 'classnames'
import META from '../../utils/Meta'
import { customPropTypes } from '../../utils/propUtils'

/**
 * A group of segments can be formatted to appear together.
 */
export default class SegmentSegments extends Component {
  static propTypes = {
    /**
     * Must be of type Segment, Segments, H1, H2, H3, H4, H5, H6, Subheader or Message.
     */
    children: customPropTypes.ofComponentTypes([
      'Segment',
      'SegmentSegments',
      'H1', 'H2', 'H3', 'H4', 'H5', 'H6',
      'Subheader',
      'Message',
    ]),
    className: PropTypes.string,
  }

  static _meta = {
    library: META.library.semanticUI,
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

    return (
      <div {...this.props} className={classes}>
        {children}
      </div>
    )
  }
}
