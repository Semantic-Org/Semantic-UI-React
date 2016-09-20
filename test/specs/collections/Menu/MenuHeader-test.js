import faker from 'faker'
import React from 'react'

import MenuHeader from 'src/collections/Menu/MenuHeader'
import * as common from 'test/specs/commonTests'

describe('MenuHeader', () => {
  common.isConformant(MenuHeader)
  common.rendersChildren(MenuHeader)

  describe('content', () => {
    it('renders text', () => {
      const text = faker.hacker.phrase()

      shallow(<MenuHeader content={text} />)
        .should.contain.text(text)
    })
  })
})
