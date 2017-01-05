import faker from 'faker'
import React from 'react'

import * as common from 'test/specs/commonTests'
import ItemExtra from 'src/views/Item/ItemExtra'

describe('ItemExtra', () => {
  common.isConformant(ItemExtra)
  common.rendersChildren(ItemExtra)

  describe('content prop', () => {
    it('renders text', () => {
      const text = faker.hacker.phrase()

      shallow(<ItemExtra content={text} />)
        .should.contain.text(text)
    })
  })
})
