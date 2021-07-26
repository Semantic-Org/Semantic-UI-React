import LabelGroup from 'src/elements/Label/LabelGroup'
import { SUI } from 'src/lib'
import * as common from 'test/specs/commonTests'

describe('LabelGroup', () => {
  common.isConformant(LabelGroup)
  common.forwardsRef(LabelGroup)
  common.hasUIClassName(LabelGroup)
  common.rendersChildren(LabelGroup)

  common.propKeyOnlyToClassName(LabelGroup, 'circular')
  common.propKeyOnlyToClassName(LabelGroup, 'tag')

  common.propValueOnlyToClassName(LabelGroup, 'color', SUI.COLORS)
  common.propValueOnlyToClassName(LabelGroup, 'size', SUI.SIZES)
})
