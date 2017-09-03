import faker from 'faker'
import _ from 'lodash'
import React from 'react'

import { SUI } from 'src/lib'
import CardHeader from 'src/views/Card/CardHeader'
import * as common from 'test/specs/commonTests'

describe('CardHeader', () => {
  common.isConformant(CardHeader)
  common.rendersChildren(CardHeader)

  common.implementsTextAlignProp(CardHeader, _.without(SUI.TEXT_ALIGNMENTS, 'justified'))

  describe('description prop', () => {
    it('renders child text', () => {
      const text = faker.hacker.phrase()

      shallow(<CardHeader content={text} />)
        .should.contain.text(text)
    })
  })
})
