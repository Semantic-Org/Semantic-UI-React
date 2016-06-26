import SegmentGroup from 'src/elements/Segment/SegmentGroup'
import * as common from 'test/specs/commonTests'

describe('SegmentGroup', () => {
  common.isConformant(SegmentGroup)
  common.hasUIClassName(SegmentGroup)
  common.rendersChildren(SegmentGroup)

  common.propKeyOnlyToClassName(SegmentGroup, 'horizontal')
  common.propKeyOnlyToClassName(SegmentGroup, 'piled')
  common.propKeyOnlyToClassName(SegmentGroup, 'raised')
  common.propKeyOnlyToClassName(SegmentGroup, 'stacked')
})
