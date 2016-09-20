import ButtonGroup from 'src/elements/Button/ButtonGroup'
import * as common from 'test/specs/commonTests'

describe('ButtonGroup', () => {
  common.isConformant(ButtonGroup)
  common.hasUIClassName(ButtonGroup)
  common.implementsWidthProp(ButtonGroup, { propKey: 'widths', widthClass: 'buttons', canEqual: false })

  common.propKeyAndValueToClassName(ButtonGroup, 'attached')
  common.propKeyOnlyToClassName(ButtonGroup, 'basic')
  common.propKeyOnlyToClassName(ButtonGroup, 'icon')
  common.propKeyOnlyToClassName(ButtonGroup, 'labeled')
  common.propKeyOnlyToClassName(ButtonGroup, 'vertical')

  common.propValueOnlyToClassName(ButtonGroup, 'color')
  common.propValueOnlyToClassName(ButtonGroup, 'size')

  common.rendersChildren(ButtonGroup)
})
