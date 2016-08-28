import faker from 'faker'
import React from 'react'

import * as common from 'test/specs/commonTests'
import ItemMeta from 'src/views/Item/ItemMeta'

describe('ItemMeta', () => {
  common.isConformant(ItemMeta)
  common.rendersChildren(ItemMeta)

  describe('content prop', () => {
    it('renders text', () => {
      const text = faker.hacker.phrase()

      shallow(<ItemMeta content={text} />)
        .should.contain.text(text)
    })
  })
})
