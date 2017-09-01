import faker from 'faker'
import React from 'react'

import CardMeta from 'src/views/Card/CardMeta'
import * as common from 'test/specs/commonTests'

describe('CardMeta', () => {
  common.isConformant(CardMeta)
  common.rendersChildren(CardMeta)

  common.implementsTextAlignProp(CardMeta, ['left', 'center', 'right'])

  describe('description prop', () => {
    it('renders child text', () => {
      const text = faker.hacker.phrase()

      shallow(<CardMeta content={text} />)
        .should.contain.text(text)
    })
  })
})
