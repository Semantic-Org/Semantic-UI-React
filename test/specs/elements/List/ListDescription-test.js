import ListDescription from 'src/elements/List/ListDescription'
import * as common from 'test/specs/commonTests'

describe('ListDescription', () => {
  common.isConformant(ListDescription)
  common.rendersChildren(ListDescription)

  common.implementsCreateMethod(ListDescription)
})
