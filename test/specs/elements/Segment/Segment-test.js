import Segment from 'src/elements/Segment/Segment'
import SegmentGroup from 'src/elements/Segment/SegmentGroup'
import * as common from 'test/specs/commonTests'

describe('Segment', () => {
  common.isConformant(Segment)
  common.hasUIClassName(SegmentGroup)
  common.hasSubComponents(Segment, [SegmentGroup])
  common.implementsTextAlignProp(Segment)

  common.propValueOnlyToClassName(Segment, 'color')
  common.propValueOnlyToClassName(Segment, 'size')

  common.propKeyOnlyToClassName(Segment, 'basic')
  common.propKeyOnlyToClassName(Segment, 'circular')
  common.propKeyOnlyToClassName(Segment, 'clearing')
  common.propKeyOnlyToClassName(Segment, 'compact')
  common.propKeyOnlyToClassName(Segment, 'disabled')
  common.propKeyOnlyToClassName(Segment, 'inverted')
  common.propKeyOnlyToClassName(Segment, 'loading')
  common.propKeyOnlyToClassName(Segment, 'piled')
  common.propKeyOnlyToClassName(Segment, 'raised')
  common.propKeyOnlyToClassName(Segment, 'secondary')
  common.propKeyOnlyToClassName(Segment, 'stacked')
  common.propKeyOnlyToClassName(Segment, 'tertiary')
  common.propKeyOnlyToClassName(Segment, 'vertical')

  common.propKeyAndValueToClassName(Segment, 'floated')

  common.propKeyOrValueAndKeyToClassName(Segment, 'attached')
  common.propKeyOrValueAndKeyToClassName(Segment, 'padded')

  common.rendersChildren(Segment)
})
