import faker from 'faker'
import React from 'react'

import * as common from 'test/specs/commonTests'
import ItemDescription from 'src/views/Item/ItemDescription'

describe('ItemDescription', () => {
  common.isConformant(ItemDescription)
  common.rendersChildren(ItemDescription)

  describe('content prop', () => {
    it('renders text', () => {
      const text = faker.hacker.phrase()

      shallow(<ItemDescription content={text} />)
        .should.contain.text(text)
    })
  })
})
