import faker from 'faker'
import _ from 'lodash'
import React from 'react'

import { SUI } from 'src/lib'
import CardMeta from 'src/views/Card/CardMeta'
import * as common from 'test/specs/commonTests'

describe('CardMeta', () => {
  common.isConformant(CardMeta)
  common.rendersChildren(CardMeta)

  common.implementsTextAlignProp(CardMeta, _.without(SUI.TEXT_ALIGNMENTS, 'justified'))

  describe('description prop', () => {
    it('renders child text', () => {
      const text = faker.hacker.phrase()

      shallow(<CardMeta content={text} />)
        .children()
        .at(0)
        .should.contain.text(text)
    })
  })
})
