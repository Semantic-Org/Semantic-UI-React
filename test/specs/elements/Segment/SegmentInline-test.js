import SegmentInline from 'src/elements/Segment/SegmentInline'
import * as common from 'test/specs/commonTests'

describe('SegmentInline', () => {
  common.isConformant(SegmentInline)
  common.forwardsRef(SegmentInline)
  common.rendersChildren(SegmentInline)
})
