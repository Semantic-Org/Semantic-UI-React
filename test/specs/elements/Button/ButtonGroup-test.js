import ButtonGroup from 'src/elements/Button/ButtonGroup'
import { SUI } from 'src/lib'
import * as common from 'test/specs/commonTests'

describe('ButtonGroup', () => {
  common.isConformant(ButtonGroup)
  common.hasUIClassName(ButtonGroup)
  common.rendersChildren(ButtonGroup)

  common.implementsWidthProp(ButtonGroup, { propKey: 'widths', widthClass: 'buttons', canEqual: false })

  common.propKeyAndValueToClassName(ButtonGroup, 'attached')

  common.propKeyOnlyToClassName(ButtonGroup, 'basic')
  common.propKeyOnlyToClassName(ButtonGroup, 'compact')
  common.propKeyOnlyToClassName(ButtonGroup, 'fluid')
  common.propKeyOnlyToClassName(ButtonGroup, 'icon')
  common.propKeyOnlyToClassName(ButtonGroup, 'inverted')
  common.propKeyOnlyToClassName(ButtonGroup, 'labeled')
  common.propKeyOnlyToClassName(ButtonGroup, 'negative')
  common.propKeyOnlyToClassName(ButtonGroup, 'positive')
  common.propKeyOnlyToClassName(ButtonGroup, 'primary')
  common.propKeyOnlyToClassName(ButtonGroup, 'primary')
  common.propKeyOnlyToClassName(ButtonGroup, 'secondary')
  common.propKeyOnlyToClassName(ButtonGroup, 'secondary')
  common.propKeyOnlyToClassName(ButtonGroup, 'toggle')
  common.propKeyOnlyToClassName(ButtonGroup, 'vertical')

  common.propValueOnlyToClassName(ButtonGroup, 'color', SUI.COLORS)
  common.propValueOnlyToClassName(ButtonGroup, 'size', SUI.SIZES)
})
