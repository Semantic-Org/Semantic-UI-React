import ItemMeta from 'src/views/Item/ItemMeta'
import * as common from 'test/specs/commonTests'

describe('ItemMeta', () => {
  common.isConformant(ItemMeta)
  common.forwardsRef(ItemMeta)
  common.rendersChildren(ItemMeta)

  common.implementsCreateMethod(ItemMeta)
})
