import faker from 'faker'
import React from 'react'

import * as common from 'test/specs/commonTests'
import StepTitle from 'src/elements/Step/StepTitle'

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
