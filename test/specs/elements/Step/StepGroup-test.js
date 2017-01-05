import faker from 'faker'
import React from 'react'
import * as common from 'test/specs/commonTests'
import Step from 'src/elements/Step/Step'
import StepGroup from 'src/elements/Step/StepGroup'

describe('StepGroup', () => {
  common.isConformant(StepGroup)
  common.hasUIClassName(StepGroup)
  common.propKeyOnlyToClassName(StepGroup, 'fluid')
  common.propKeyOnlyToClassName(StepGroup, 'ordered')
  common.propKeyAndValueToClassName(StepGroup, 'stackable')
  common.propKeyOnlyToClassName(StepGroup, 'vertical')

  describe('renders children', () => {
    const firstText = faker.hacker.phrase()
    const secondText = faker.hacker.phrase()

    it('with `children` prop', () => {
      const wrapper = mount(
        <StepGroup>
          <Step>{firstText}</Step>
          <Step>{secondText}</Step>
          </StepGroup>
      )
        .find('Step')

      wrapper.first().should.contain.text(firstText)
      wrapper.last().should.contain.text(secondText)
    })

    it('with `items` prop', () => {
      const items = [
        { title: firstText },
        { title: secondText },
      ]

      const wrapper = mount(<StepGroup items={items} />).find('Step')

      wrapper.first().find('StepTitle').should.contain.text(firstText)
      wrapper.last().find('StepTitle').should.contain.text(secondText)
    })
  })
})
