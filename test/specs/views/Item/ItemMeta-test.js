import faker from 'faker'
import React from 'react'

import ItemMeta from 'src/views/Item/ItemMeta'
import * as common from 'test/specs/commonTests'

describe('ItemMeta', () => {
  common.isConformant(ItemMeta)
  common.rendersChildren(ItemMeta)

  common.implementsCreateMethod(ItemMeta)

  describe('content prop', () => {
    it('renders text', () => {
      const text = faker.hacker.phrase()

      shallow(<ItemMeta content={text} />)
        .should.contain.text(text)
    })
  })
})
