import * as common from 'test/specs/commonTests'
import LabelDetail from 'src/elements/Label/LabelDetail'

describe('LabelDetail', () => {
  common.isConformant(LabelDetail)
  common.rendersChildren(LabelDetail)
})
