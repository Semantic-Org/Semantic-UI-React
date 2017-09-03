import faker from 'faker'
import _ from 'lodash'
import React from 'react'

import { SUI } from 'src/lib'
import CardDescription from 'src/views/Card/CardDescription'
import * as common from 'test/specs/commonTests'

describe('CardDescription', () => {
  common.isConformant(CardDescription)
  common.rendersChildren(CardDescription)
  common.implementsTextAlignProp(CardDescription, _.without(SUI.TEXT_ALIGNMENTS, 'justified'))

  describe('description prop', () => {
    it('renders child text', () => {
      const text = faker.hacker.phrase()

      shallow(<CardDescription content={text} />)
        .should.contain.text(text)
    })
  })
})
