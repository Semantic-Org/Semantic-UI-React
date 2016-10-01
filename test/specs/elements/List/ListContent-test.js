import * as common from 'test/specs/commonTests'
import ListContent from 'src/elements/List/ListContent'

describe('ListContent', () => {
  common.isConformant(ListContent)
  common.rendersChildren(ListContent)

  common.implementsVerticalAlignProp(ListContent)
  common.propKeyAndValueToClassName(ListContent, 'floated')
})
