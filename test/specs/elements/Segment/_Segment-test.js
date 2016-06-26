import _Segment from 'src/elements/Segment/_Segment'
import * as common from 'test/specs/commonTests'

describe('_Segment', () => {
  common.rendersChildren(_Segment)

  common.propKeyOnlyToClassName(_Segment, 'raised')
  common.propKeyOnlyToClassName(_Segment, 'stacked')
  common.propKeyOnlyToClassName(_Segment, 'piled')
  common.propKeyOnlyToClassName(_Segment, 'disabled')
  common.propKeyOnlyToClassName(_Segment, 'loading')
  common.propKeyOnlyToClassName(_Segment, 'basic')
  common.propKeyOnlyToClassName(_Segment, 'inverted')
  common.propKeyOnlyToClassName(_Segment, 'circular')
  common.propKeyOnlyToClassName(_Segment, 'clearing')
  common.propKeyOnlyToClassName(_Segment, 'compact')

  common.propKeyAndValueToClassName(_Segment, 'floated')

  common.propKeyOrValueToClassName(_Segment, 'attached')
  common.propKeyOrValueToClassName(_Segment, 'padded')

  common.propValueOnlyToClassName(_Segment, 'color')
})
