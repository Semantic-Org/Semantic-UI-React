import faker from 'faker'
import React from 'react'

import Item from 'src/views/Item/Item'
import ItemContent from 'src/views/Item/ItemContent'
import ItemDescription from 'src/views/Item/ItemDescription'
import ItemExtra from 'src/views/Item/ItemExtra'
import ItemGroup from 'src/views/Item/ItemGroup'
import ItemHeader from 'src/views/Item/ItemHeader'
import ItemImage from 'src/views/Item/ItemImage'
import ItemMeta from 'src/views/Item/ItemMeta'
import * as common from 'test/specs/commonTests'

describe('Item', () => {
  common.isConformant(Item)
  common.hasSubcomponents(Item, [
    ItemContent,
    ItemDescription,
    ItemExtra,
    ItemGroup,
    ItemHeader,
    ItemImage,
    ItemMeta,
  ])
  common.rendersChildren(Item, {
    rendersContent: false,
  })

  common.implementsShorthandProp(Item, {
    propKey: 'image',
    ShorthandComponent: ItemImage,
    mapValueToProps: val => ({ src: val }),
  })

  describe('content prop', () => {
    it('renders ItemContent component', () => {
      expect(shallow(<Item content={faker.hacker.phrase()} />)).have.descendants('ItemContent')
    })
  })

  describe('description prop', () => {
    it('renders ItemContent component', () => {
      expect(shallow(<Item description={faker.hacker.phrase()} />)).have.descendants('ItemContent')
    })
  })

  describe('extra prop', () => {
    it('renders ItemContent component', () => {
      expect(shallow(<Item extra={faker.hacker.phrase()} />)).have.descendants('ItemContent')
    })
  })

  describe('header prop', () => {
    it('renders ItemContent component', () => {
      expect(shallow(<Item header={faker.hacker.phrase()} />)).have.descendants('ItemContent')
    })
  })

  describe('image prop', () => {
    it('renders ItemImage component', () => {
      expect(shallow(<Item image={faker.image.imageUrl()} />)).have.descendants('ItemImage')
    })
  })

  describe('meta prop', () => {
    it('renders ItemContent component', () => {
      expect(shallow(<Item meta={faker.hacker.phrase()} />)).have.descendants('ItemContent')
    })
  })
})
