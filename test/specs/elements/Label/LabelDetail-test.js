import faker from 'faker'
import React from 'react'

import * as common from 'test/specs/commonTests'
import LabelDetail from 'src/elements/Label/LabelDetail'

describe('LabelDetail', () => {
  common.isConformant(LabelDetail)
  common.rendersChildren(LabelDetail)

  describe('content prop', () => {
    it('renders children', () => {
      const text = faker.hacker.phrase()

      shallow(<LabelDetail content={text} />)
        .should.contain.text(text)
    })
  })
})
