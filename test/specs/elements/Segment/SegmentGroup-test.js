import _ from 'lodash'

import SegmentGroup from 'src/elements/Segment/SegmentGroup'
import { SUI } from 'src/lib'
import * as common from 'test/specs/commonTests'

describe('SegmentGroup', () => {
  common.isConformant(SegmentGroup)
  common.forwardsRef(SegmentGroup)
  common.hasUIClassName(SegmentGroup)
  common.rendersChildren(SegmentGroup)

  common.propKeyOnlyToClassName(SegmentGroup, 'compact')
  common.propKeyOnlyToClassName(SegmentGroup, 'horizontal')
  common.propKeyOnlyToClassName(SegmentGroup, 'piled')
  common.propKeyOnlyToClassName(SegmentGroup, 'raised')
  common.propKeyOnlyToClassName(SegmentGroup, 'stacked')

  common.propValueOnlyToClassName(SegmentGroup, 'size', _.without(SUI.SIZES, 'medium'))
})
