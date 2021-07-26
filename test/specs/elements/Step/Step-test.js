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
  common.forwardsRef(Step)
  common.forwardsRef(Step, { requiredProps: { content: faker.lorem.word() } })
  common.forwardsRef(Step, { requiredProps: { content: <span /> } })
  common.hasSubcomponents(Step, [StepContent, StepDescription, StepTitle])
  common.rendersChildren(Step)

  common.implementsIconProp(Step, { autoGenerateKey: false })

  common.propKeyOnlyToClassName(Step, 'active')
  common.propKeyOnlyToClassName(Step, 'completed')
  common.propKeyOnlyToClassName(Step, 'disabled')
  common.propKeyOnlyToClassName(Step, 'link')

  it('renders as a div by default', () => {
    shallow(<Step />).should.have.tagName('div')
  })

  describe('children', () => {
    shallow(<Step>{faker.hacker.phrase()}</Step>).should.not.have.descendants('StepContent')
  })

  describe('description', () => {
    it('passes prop to StepContent', () => {
      const description = faker.hacker.phrase()

      shallow(<Step description={description} />)
        .find('StepContent')
        .should.have.prop('description', description)
    })
  })

  describe('href', () => {
    it('renders as `a` when defined', () => {
      const url = faker.internet.url()
      const wrapper = shallow(<Step href={url} />)

      wrapper.should.have.tagName('a')
      wrapper.should.have.attr('href', url)
    })
  })

  describe('onClick', () => {
    it('is called with (e, data) when clicked', () => {
      const event = { target: null }
      const onClick = sandbox.spy()

      mount(<Step onClick={onClick} />).simulate('click', event)

      onClick.should.have.been.calledOnce()
      onClick.should.have.been.calledWithMatch(event, { onClick })
    })

    it('is not called when is disabled', () => {
      const onClick = sandbox.spy()

      mount(<Step disabled onClick={onClick} />).simulate('click')
      onClick.should.have.not.been.called()
    })

    it('renders as `a` when defined', () => {
      shallow(<Step onClick={() => null} />).should.have.tagName('a')
    })
  })

  describe('title', () => {
    it('passes prop to StepContent', () => {
      const title = faker.hacker.phrase()

      shallow(<Step title={title} />)
        .find('StepContent')
        .should.have.prop('title', title)
    })
  })
})
