import faker from 'faker'
import React from 'react'

import StepTitle from 'src/elements/Step/StepTitle'
import * as common from 'test/specs/commonTests'

describe('StepTitle', () => {
  common.isConformant(StepTitle)
  common.rendersChildren(StepTitle)

  describe('description prop', () => {
    it('renders child text', () => {
      const text = faker.hacker.phrase()

      shallow(<StepTitle title={text} />)
        .should.contain.text(text)
    })

    it('renders child node', () => {
      const child = <div data-child={faker.hacker.noun()} />

      shallow(<StepTitle title={child} />)
        .should.contain(child)
    })
  })
})
