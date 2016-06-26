import React, { PropTypes } from 'react'
import META from '../../utils/Meta'
import {
  getUnhandledProps,
} from '../../utils/propUtils'
import _Segment from './_Segment'

function SegmentGroup(props) {
  const {
    children,
  } = props

  const rest = getUnhandledProps(SegmentGroup, props)

  return (
    <_Segment {...rest} _sdClass='sd-segment-group' _segmentClass='segments'>
      {children}
    </_Segment>
  )
}


SegmentGroup._meta = {
  library: META.library.semanticUI,
  name: 'SegmentGroup',
  parent: 'Segment',
  type: META.type.element,
}


SegmentGroup.propTypes = {
  /** Class names for custom styling. */
  className: PropTypes.string,
  children: PropTypes.array,
}

export default SegmentGroup
