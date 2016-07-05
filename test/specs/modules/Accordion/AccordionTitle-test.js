import React from 'react'
import * as common from 'test/specs/commonTests'
import sandbox from 'test/utils/Sandbox-util'

import Accordion from 'src/modules/Accordion/Accordion'
import AccordionTitle from 'src/modules/Accordion/AccordionTitle'

describe('AccordionTitle', () => {
  common.isConformant(AccordionTitle)
  common.rendersChildren(AccordionTitle)
  common.propKeyOnlyToClassName(AccordionTitle, 'active')

  describe('onClick', () => {
    it('can be omitted', () => {
      const wrapper = shallow(<AccordionTitle />)
      const click = () => wrapper.simulate('click')
      expect(click).to.not.throw()
    })
    it('is called with (event, undefined) when not a child of Accordion', () => {
      const spy = sandbox.spy()
      shallow(<AccordionTitle onClick={spy} />)
        .simulate('click')

      spy.should.have.been.calledOnce()

      const arg2 = spy.firstCall.args[1]
      expect(arg2).to.equal(undefined, `The second argument was not undefined, got: ${typeof arg2}`)
    })
    it('is called with (event, index) when a child of Accordion', () => {
      const spy = sandbox.spy()
      shallow(
        <Accordion>
          <AccordionTitle onClick={spy} />
        </Accordion>
      )
        .find('AccordionTitle')
        .simulate('click')

      const arg2 = spy.firstCall.args[1]
      spy.should.have.been.calledOnce()
      expect(arg2).to.equal(0, `The second argument was not the index, got: ${typeof arg2}`)
    })
  })
})
