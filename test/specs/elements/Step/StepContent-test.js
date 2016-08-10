import faker from 'faker'
import React from 'react'

import * as common from 'test/specs/commonTests'
import StepContent from 'src/elements/Step/StepContent'
import StepDescription from 'src/elements/Step/StepDescription'
import StepTitle from 'src/elements/Step/StepTitle'

describe('StepContent', () => {
  common.isConformant(StepContent)
  common.rendersChildren(StepContent)

  describe('description prop', () => {
    it('renders description component', () => {
      const text = faker.hacker.phrase()

      shallow(<StepContent description={text} />)
        .should.contain(<StepDescription description={text} />)
    })
  })

  describe('title prop', () => {
    it('renders title component', () => {
      const text = faker.hacker.phrase()

      shallow(<StepContent title={text} />)
        .should.contain(<StepTitle title={text} />)
    })
  })
})
