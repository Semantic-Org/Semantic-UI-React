import * as common from 'test/specs/commonTests'
import LabelGroup from 'src/elements/Label/LabelGroup'

describe('LabelGroup', () => {
  common.isConformant(LabelGroup)
  common.hasUIClassName(LabelGroup)
  common.rendersChildren(LabelGroup)

  common.propKeyOnlyToClassName(LabelGroup, 'circular')
  common.propKeyOnlyToClassName(LabelGroup, 'tag')

  common.propValueOnlyToClassName(LabelGroup, 'color')
  common.propValueOnlyToClassName(LabelGroup, 'size')
})
