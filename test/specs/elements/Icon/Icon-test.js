import Icon from 'src/elements/Icon/Icon'
import IconGroup from 'src/elements/Icon/IconGroup'
import * as common from 'test/specs/commonTests'

describe('Icon', () => {
  common.isConformant(Icon)
  common.hasSubComponents(Icon, [IconGroup])
  common.rendersChildren(Icon)

  common.propKeyOnlyToClassName(Icon, 'disabled')
  common.propKeyOnlyToClassName(Icon, 'fitted')
  common.propKeyOnlyToClassName(Icon, 'link')
  common.propKeyOnlyToClassName(Icon, 'circular')
  common.propKeyOnlyToClassName(Icon, 'bordered')
  common.propKeyOnlyToClassName(Icon, 'inverted')
  common.propKeyOnlyToClassName(Icon, 'loading')
  common.propKeyOnlyToClassName(Icon, 'corner')

  common.propKeyAndValueToClassName(Icon, 'flipped')
  common.propKeyAndValueToClassName(Icon, 'rotated')

  common.propValueOnlyToClassName(Icon, 'color')
})
