import faker from 'faker'
import React from 'react'

import * as common from 'test/specs/commonTests'
import StepDescription from 'src/elements/Step/StepDescription'

describe('StepDescription', () => {
  common.isConformant(StepDescription)
  common.rendersChildren(StepDescription)

  describe('description prop', () => {
    it('renders child text', () => {
      const text = faker.hacker.phrase()

      shallow(<StepDescription description={text} />)
        .should.contain.text(text)
    })

    it('renders child node', () => {
      const child = <div data-child={faker.hacker.noun()} />

      shallow(<StepDescription description={child} />)
        .should.contain(child)
    })
  })
})
