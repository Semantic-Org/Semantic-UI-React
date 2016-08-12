import faker from 'faker'
import React from 'react'

import * as common from 'test/specs/commonTests'
import { sandbox } from 'test/utils'
import Step from 'src/elements/Step/Step'
import StepContent from 'src/elements/Step/StepContent'
import StepDescription from 'src/elements/Step/StepDescription'
import StepTitle from 'src/elements/Step/StepTitle'

describe('Step', () => {
  common.isConformant(Step)
  common.implementsIconProp(Step)
  common.hasSubComponents(Step, [StepContent, StepDescription, StepTitle])
  common.propKeyOnlyToClassName(Step, 'active')
  common.propKeyOnlyToClassName(Step, 'completed')
  common.propKeyOnlyToClassName(Step, 'disabled')
  common.propKeyOnlyToClassName(Step, 'link')
  common.rendersChildren(Step)

  it('renders only children by default', () => {
    shallow(<Step>{faker.hacker.phrase()}</Step>)
      .should.not.have.descendants('StepContent')
  })

  it('renders Description component', () => {
    const wrapper = mount(<Step description={faker.hacker.phrase()} />)

    wrapper.should.have.descendants('StepContent')
    wrapper.find('StepContent').should.have.descendants('StepDescription')
  })

  it('renders Title component', () => {
    const wrapper = mount(<Step title={faker.hacker.phrase()} />)

    wrapper.should.have.descendants('StepContent')
    wrapper.find('StepContent').should.have.descendants('StepTitle')
  })

  describe('renders different elements', () => {
    it('<div> by default', () => {
      shallow(<Step />).should.have.tagName('div')
    })

    it('<a> with `href` prop', () => {
      const url = faker.internet.url()
      const wrapper = shallow(<Step href={url} />)

      wrapper.should.have.tagName('a')
      wrapper.should.have.attr('href', url)
    })

    describe('onClick prop', () => {
      it('can be omitted', () => {
        const click = () => mount(<Step>{faker.hacker.phrase()}</Step>).simulate('click')
        expect(click).to.not.throw()
      })

      it('renders <a> and handles click', () => {
        const handleClick = sandbox.spy()
        const wrapper = mount(<Step onClick={handleClick} />)

        wrapper.should.have.tagName('a')
        wrapper.simulate('click')

        handleClick.should.have.been.calledOnce()
        handleClick.should.have.been.calledWithMatch({})
      })
    })
  })
})
