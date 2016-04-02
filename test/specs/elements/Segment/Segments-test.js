import Segments from 'src/elements/Segment/SegmentSegments'
import * as common from 'test/specs/commonTests'

describe('Segments', () => {
  common.isConformant(Segments)
  common.hasUIClassName(Segments)
  common.rendersChildren(Segments)
})
