import faker from 'faker'
import React from 'react'

import CardHeader from 'src/views/Card/CardHeader'
import * as common from 'test/specs/commonTests'

describe('CardHeader', () => {
  common.isConformant(CardHeader)
  common.rendersChildren(CardHeader)

  common.implementsTextAlignProp(CardHeader, ['left', 'center', 'right'])

  describe('description prop', () => {
    it('renders child text', () => {
      const text = faker.hacker.phrase()

      shallow(<CardHeader content={text} />)
        .should.contain.text(text)
    })
  })
})
