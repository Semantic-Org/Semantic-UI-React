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
  common.hasSubComponents(Step, [StepContent, StepDescription, StepTitle])
  common.rendersChildren(Step)

  common.implementsIconProp(Step)

  common.propKeyOnlyToClassName(Step, 'active')
  common.propKeyOnlyToClassName(Step, 'completed')
  common.propKeyOnlyToClassName(Step, 'disabled')
  common.propKeyOnlyToClassName(Step, 'link')

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
      it('is called with (e, data) when clicked', () => {
        const event = { target: null }
        const onClick = sandbox.spy()

        shallow(<Step onClick={onClick} />)
          .simulate('click', event)

        onClick.should.have.been.calledOnce()
        onClick.should.have.been.calledWithMatch(event, { onClick })
      })

      it('is not called when is disabled', () => {
        const onClick = sandbox.spy()

        shallow(<Step disabled onClick={onClick} />)
          .simulate('click')
        onClick.should.have.callCount(0)
      })

      it('renders an `a` tag', () => {
        shallow(<Step onClick={() => null} />)
          .should.have.tagName('a')
      })
    })
  })
})
