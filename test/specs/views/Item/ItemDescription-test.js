import faker from 'faker'
import React from 'react'

import ItemDescription from 'src/views/Item/ItemDescription'
import * as common from 'test/specs/commonTests'

describe('ItemDescription', () => {
  common.isConformant(ItemDescription)
  common.rendersChildren(ItemDescription)

  common.implementsCreateMethod(ItemDescription)

  describe('content prop', () => {
    it('renders text', () => {
      const text = faker.hacker.phrase()

      shallow(<ItemDescription content={text} />)
        .should.contain.text(text)
    })
  })
})
