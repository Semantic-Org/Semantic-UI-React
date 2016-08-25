import Item from 'src/views/Item/Item'
import ItemGroup from 'src/views/Item/ItemGroup'
import * as common from 'test/specs/commonTests'

describe('Item', () => {
  common.isConformant(Item)
  common.rendersChildren(Item)
  common.hasSubComponents(Item, [ItemGroup])
})
