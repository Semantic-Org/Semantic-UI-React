import _ from 'lodash'

import Segment from 'src/elements/Segment/Segment'
import SegmentGroup from 'src/elements/Segment/SegmentGroup'
import { SUI } from 'src/lib'
import * as common from 'test/specs/commonTests'

describe('Segment', () => {
  common.isConformant(Segment)
  common.hasSubComponents(Segment, [SegmentGroup])
  common.hasUIClassName(Segment)
  common.rendersChildren(Segment)

  common.implementsTextAlignProp(Segment, ['left', 'center', 'right'])

  common.propKeyAndValueToClassName(Segment, 'floated', SUI.FLOATS)

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

  common.propKeyOrValueAndKeyToClassName(Segment, 'attached', ['top', 'bottom'])
  common.propKeyOrValueAndKeyToClassName(Segment, 'padded', ['very'])

  common.propValueOnlyToClassName(Segment, 'color', SUI.COLORS)
  common.propValueOnlyToClassName(Segment, 'size', _.without(SUI.SIZES, 'medium'))
})
