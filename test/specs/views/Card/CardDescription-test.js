import faker from 'faker'
import React from 'react'

import * as common from 'test/specs/commonTests'
import CardDescription from 'src/views/Card/CardDescription'

describe('CardDescription', () => {
  common.isConformant(CardDescription)
  common.rendersChildren(CardDescription)

  describe('description prop', () => {
    it('renders child text', () => {
      const text = faker.hacker.phrase()

      shallow(<CardDescription content={text} />)
        .should.contain.text(text)
    })

    it('renders child node', () => {
      const child = <div data-child={faker.hacker.noun()} />

      shallow(<CardDescription content={child} />)
        .should.contain(child)
    })
  })
})
