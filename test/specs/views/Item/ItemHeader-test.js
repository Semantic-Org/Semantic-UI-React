import faker from 'faker'
import React from 'react'

import * as common from 'test/specs/commonTests'
import ItemHeader from 'src/views/Item/ItemHeader'

describe('ItemHeader', () => {
  common.isConformant(ItemHeader)
  common.rendersChildren(ItemHeader)

  describe('content prop', () => {
    it('renders text', () => {
      const text = faker.hacker.phrase()

      shallow(<ItemHeader content={text} />)
        .should.contain.text(text)
    })
  })
})
