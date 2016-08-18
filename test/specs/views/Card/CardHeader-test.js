import faker from 'faker'
import React from 'react'

import * as common from 'test/specs/commonTests'
import CardHeader from 'src/views/Card/CardHeader'

describe('CardHeader', () => {
  common.isConformant(CardHeader)
  common.rendersChildren(CardHeader)

  describe('description prop', () => {
    it('renders child text', () => {
      const text = faker.hacker.phrase()

      shallow(<CardHeader content={text} />)
        .should.contain.text(text)
    })

    it('renders child node', () => {
      const child = <div data-child={faker.hacker.noun()} />

      shallow(<CardHeader content={child} />)
        .should.contain(child)
    })
  })
})
