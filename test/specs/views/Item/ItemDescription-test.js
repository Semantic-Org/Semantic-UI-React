import ItemDescription from 'src/views/Item/ItemDescription'
import * as common from 'test/specs/commonTests'

describe('ItemDescription', () => {
  common.isConformant(ItemDescription)
  common.rendersChildren(ItemDescription)

  common.implementsCreateMethod(ItemDescription)
})
