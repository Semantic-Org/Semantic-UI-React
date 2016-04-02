import Item from 'src/views/Item/Item'
import ItemItems from 'src/views/Item/ItemItems'
import * as common from 'test/specs/commonTests'

describe('ItemItems', () => {
  common.isConformant(ItemItems)
  common.hasUIClassName(ItemItems)
  common.rendersChildren(ItemItems)
})

describe('Item', () => {
  common.isConformant(Item)
  common.rendersChildren(Item)
  common.hasSubComponents(Item, [ItemItems])
})
