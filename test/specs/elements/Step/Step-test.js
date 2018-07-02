import faker from 'faker'
import React from 'react'

import Step from 'src/elements/Step/Step'
import StepContent from 'src/elements/Step/StepContent'
import StepDescription from 'src/elements/Step/StepDescription'
import StepTitle from 'src/elements/Step/StepTitle'
import * as common from 'test/specs/commonTests'
import { sandbox } from 'test/utils'

describe('Step', () => {
  common.isConformant(Step)
  common.hasSubcomponents(Step, [StepContent, StepDescription, StepTitle])
  common.rendersChildren(Step)

  common.implementsIconProp(Step)

  common.propKeyOnlyToClassName(Step, 'active')
  common.propKeyOnlyToClassName(Step, 'completed')
  common.propKeyOnlyToClassName(Step, 'disabled')
  common.propKeyOnlyToClassName(Step, 'link')

  it('renders as a div by default', () => {
    expect(shallow(<Step />)).have.tagName('div')
  })

  describe('children', () => {
    expect(shallow(<Step>{faker.hacker.phrase()}</Step>)).not.have.descendants('StepContent')
  })

  describe('description', () => {
    it('passes prop to StepContent', () => {
      const description = faker.hacker.phrase()

      expect(shallow(<Step description={description} />).find('StepContent')).have.prop(
        'description',
        description,
      )
    })
  })

  describe('href', () => {
    it('renders as `a` when defined', () => {
      const url = faker.internet.url()
      const wrapper = shallow(<Step href={url} />)

      expect(wrapper).have.tagName('a')
      expect(wrapper).have.attr('href', url)
    })
  })

  describe('onClick', () => {
    it('is called with (e, data) when clicked', () => {
      const event = { target: null }
      const onClick = sandbox.spy()

      shallow(<Step onClick={onClick} />).simulate('click', event)

      expect(onClick).have.been.calledOnce()
      expect(onClick).have.been.calledWithMatch(event, { onClick })
    })

    it('is not called when is disabled', () => {
      const onClick = sandbox.spy()

      shallow(<Step disabled onClick={onClick} />).simulate('click')
      expect(onClick).have.not.been.called()
    })

    it('renders as `a` when defined', () => {
      expect(shallow(<Step onClick={() => null} />)).have.tagName('a')
    })
  })

  describe('title', () => {
    it('passes prop to StepContent', () => {
      const title = faker.hacker.phrase()

      expect(shallow(<Step title={title} />).find('StepContent')).have.prop('title', title)
    })
  })
})
