import ItemExtra from 'src/views/Item/ItemExtra'
import * as common from 'test/specs/commonTests'

describe('ItemExtra', () => {
  common.isConformant(ItemExtra)
  common.forwardsRef(ItemExtra)
  common.rendersChildren(ItemExtra)

  common.implementsCreateMethod(ItemExtra)
})
