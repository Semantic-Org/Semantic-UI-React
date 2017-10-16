import ItemContent from 'src/views/Item/ItemContent'
import ItemDescription from 'src/views/Item/ItemDescription'
import ItemExtra from 'src/views/Item/ItemExtra'
import ItemHeader from 'src/views/Item/ItemHeader'
import ItemMeta from 'src/views/Item/ItemMeta'
import * as common from 'test/specs/commonTests'

describe('ItemContent', () => {
  common.isConformant(ItemContent)
  common.rendersChildren(ItemContent)

  common.implementsShorthandProp(ItemContent, {
    propKey: 'header',
    ShorthandComponent: ItemHeader,
    mapValueToProps: val => ({ content: val }),
  })
  common.implementsShorthandProp(ItemContent, {
    propKey: 'meta',
    ShorthandComponent: ItemMeta,
    mapValueToProps: val => ({ content: val }),
  })
  common.implementsShorthandProp(ItemContent, {
    propKey: 'description',
    ShorthandComponent: ItemDescription,
    mapValueToProps: val => ({ content: val }),
  })
  common.implementsShorthandProp(ItemContent, {
    propKey: 'extra',
    ShorthandComponent: ItemExtra,
    mapValueToProps: val => ({ content: val }),
  })
  common.implementsVerticalAlignProp(ItemContent)
})
