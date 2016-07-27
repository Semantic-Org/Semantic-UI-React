import faker from 'faker'
import React from 'react'

import * as common from 'test/specs/commonTests'
import sandbox from 'test/utils/Sandbox-util'
import Step from 'src/elements/Step/Step'

describe('Step', () => {
  common.isConformant(Step)
  common.implementsIconProp(Step)
  common.propKeyOnlyToClassName(Step, 'active')
  common.propKeyOnlyToClassName(Step, 'completed')
  common.propKeyOnlyToClassName(Step, 'disabled')
  common.propKeyOnlyToClassName(Step, 'link')
  common.rendersChildren(Step)

  describe('renders Content component', () => {
    it('only children by default', () => {
      shallow(<Step>{faker.hacker.phrase()}</Step>)
        .should.not.have.descendants('StepContent')
    })

    it('with `completed` prop', () => {
      shallow(<Step completed>{faker.hacker.phrase()}</Step>)
        .should.have.descendants('StepContent')
    })

    it('with `icon` prop', () => {
      shallow(<Step icon={faker.hacker.noun()}>{faker.hacker.phrase()}</Step>)
        .should.have.descendants('StepContent')
    })

    it('with `ordered` prop', () => {
      shallow(<Step ordered>{faker.hacker.phrase()}</Step>)
        .should.have.descendants('StepContent')
    })
  })

  describe('renders Description component', () => {
    it('only Description by default', () => {
      const wrapper = shallow(<Step description={faker.hacker.phrase()} />)

      wrapper.should.not.have.descendants('StepContent')
      wrapper.should.have.descendants('StepDescription')
    })

    it('Description inside content with `icon` prop', () => {
      const wrapper = mount(<Step icon={faker.hacker.noun()} description={faker.hacker.phrase()} />)

      wrapper.should.have.descendants('StepContent')
      wrapper.find('StepContent').should.have.descendants('StepDescription')
    })
  })

  describe('renders Title component', () => {
    it('only Title by default', () => {
      const wrapper = shallow(<Step title={faker.hacker.phrase()} />)

      wrapper.should.not.have.descendants('StepContent')
      wrapper.should.have.descendants('StepTitle')
    })

    it('Title inside content with `icon` prop', () => {
      const wrapper = mount(<Step icon={faker.hacker.noun()} title={faker.hacker.phrase()} />)

      wrapper.should.have.descendants('StepContent')
      wrapper.find('StepContent').should.have.descendants('StepTitle')
    })
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

    it('<a> with `onClick` prop', () => {
      const handleClick = sandbox.spy()
      const wrapper = mount(<Step onClick={handleClick} />)

      wrapper.should.have.tagName('a')
      wrapper.simulate('click')

      handleClick.should.have.been.calledOnce()
      handleClick.should.have.been.calledWithMatch({})
    })
  })
})
