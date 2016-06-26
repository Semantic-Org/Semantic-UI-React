import React from 'react'
import META from '../../utils/Meta'
import _Segment from './_Segment'
import SegmentGroup from './SegmentGroup'

function Segment(props) {
  return (
    <_Segment {...props} />
  )
}

Segment._meta = {
  library: META.library.semanticUI,
  name: 'Segment',
  type: META.type.element,
}

Segment.Group = SegmentGroup

export default Segment
