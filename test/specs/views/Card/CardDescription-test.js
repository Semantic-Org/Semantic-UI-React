import faker from 'faker'
import React from 'react'

import CardDescription from 'src/views/Card/CardDescription'
import * as common from 'test/specs/commonTests'

describe('CardDescription', () => {
  common.isConformant(CardDescription)
  common.rendersChildren(CardDescription)

  describe('description prop', () => {
    it('renders child text', () => {
      const text = faker.hacker.phrase()

      shallow(<CardDescription content={text} />)
        .should.contain.text(text)
    })
  })
})
