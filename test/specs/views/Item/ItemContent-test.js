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
  common.rendersChildren(ItemContent)

  describe('content prop', () => {
    it('renders text', () => {
      const text = faker.hacker.phrase()

      shallow(<ItemContent content={text} />)
        .should.contain.text(text)
    })
  })

  describe('description prop', () => {
    it('renders ItemDescription component', () => {
      const text = faker.hacker.phrase()

      shallow(<ItemContent description={text} />)
        .should.contain(<ItemDescription content={text} />)
    })
  })

  describe('extra prop', () => {
    it('renders ItemExtra component', () => {
      const text = faker.hacker.phrase()

      shallow(<ItemContent extra={text} />)
        .should.contain(<ItemExtra content={text} />)
    })
  })

  describe('header prop', () => {
    it('renders ItemHeader component', () => {
      const text = faker.hacker.phrase()

      shallow(<ItemContent header={text} />)
        .should.contain(<ItemHeader content={text} />)
    })
  })

  describe('meta prop', () => {
    it('renders ItemMeta component', () => {
      const text = faker.hacker.phrase()

      shallow(<ItemContent meta={text} />)
        .should.contain(<ItemMeta content={text} />)
    })
  })
})
