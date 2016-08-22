import ItemGroup from 'src/views/Item/ItemGroup'
import * as common from 'test/specs/commonTests'

describe('ItemGroup', () => {
  common.isConformant(ItemGroup)
  common.hasUIClassName(ItemGroup)
  common.rendersChildren(ItemGroup)
})
