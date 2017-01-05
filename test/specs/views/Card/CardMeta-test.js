import faker from 'faker'
import React from 'react'

import * as common from 'test/specs/commonTests'
import CardMeta from 'src/views/Card/CardMeta'

describe('CardMeta', () => {
  common.isConformant(CardMeta)
  common.rendersChildren(CardMeta)

  describe('description prop', () => {
    it('renders child text', () => {
      const text = faker.hacker.phrase()

      shallow(<CardMeta content={text} />)
        .should.contain.text(text)
    })
  })
})
