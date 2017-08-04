import faker from 'faker'
import React from 'react'

import ItemExtra from 'src/views/Item/ItemExtra'
import * as common from 'test/specs/commonTests'

describe('ItemExtra', () => {
  common.isConformant(ItemExtra)
  common.rendersChildren(ItemExtra)

  common.implementsCreateMethod(ItemExtra)

  describe('content prop', () => {
    it('renders text', () => {
      const text = faker.hacker.phrase()

      shallow(<ItemExtra content={text} />)
        .should.contain.text(text)
    })
  })
})
