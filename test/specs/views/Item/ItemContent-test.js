import faker from 'faker'
import React from 'react'

import * as common from 'test/specs/commonTests'
import ItemContent from 'src/views/Item/ItemContent'
import ItemDescription from 'src/views/Item/ItemDescription'
import ItemExtra from 'src/views/Item/ItemExtra'
import ItemHeader from 'src/views/Item/ItemHeader'
import ItemMeta from 'src/views/Item/ItemMeta'

describe('ItemContent', () => {
  common.isConformant(ItemContent)
  common.implementsVerticalAlignProp(ItemContent)
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
  common.rendersChildren(ItemContent)

  describe('content prop', () => {
    it('renders text', () => {
      const text = faker.hacker.phrase()

      shallow(<ItemContent content={text} />)
        .should.contain.text(text)
    })
  })
})
