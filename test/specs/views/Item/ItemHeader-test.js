import faker from 'faker'
import React from 'react'

import ItemHeader from 'src/views/Item/ItemHeader'
import * as common from 'test/specs/commonTests'

describe('ItemHeader', () => {
  common.isConformant(ItemHeader)
  common.rendersChildren(ItemHeader)

  common.implementsCreateMethod(ItemHeader)

  describe('content prop', () => {
    it('renders text', () => {
      const text = faker.hacker.phrase()

      shallow(<ItemHeader content={text} />)
        .should.contain.text(text)
    })
  })
})
