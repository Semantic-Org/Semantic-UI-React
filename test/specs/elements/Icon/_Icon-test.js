import _Icon from 'src/elements/Icon/_Icon'
import * as common from 'test/specs/commonTests'

describe('_Icon', () => {
  common.rendersChildren(_Icon)

  common.propKeyOnlyToClassName(_Icon, 'disabled')
  common.propKeyOnlyToClassName(_Icon, 'fitted')
  common.propKeyOnlyToClassName(_Icon, 'link')
  common.propKeyOnlyToClassName(_Icon, 'circular')
  common.propKeyOnlyToClassName(_Icon, 'bordered')
  common.propKeyOnlyToClassName(_Icon, 'inverted')
  common.propKeyOnlyToClassName(_Icon, 'loading')
  common.propKeyOnlyToClassName(_Icon, 'corner')

  common.propKeyAndValueToClassName(_Icon, 'flipped')
  common.propKeyAndValueToClassName(_Icon, 'rotated')

  common.propValueOnlyToClassName(_Icon, 'color')
})
