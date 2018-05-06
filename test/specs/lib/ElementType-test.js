import React from 'react'

import Ref from 'src/addons/Ref'
import Container from 'src/elements/Container'
import { ElementType } from 'src/lib'
import { sandbox } from 'test/utils'

describe('ElementType', () => {
  describe('children', () => {
    it('adds ref to a string element', () => {
      const innerRef = sandbox.spy()
      const wrapper = mount(<ElementType as='a' innerRef={innerRef} />)

      wrapper.childAt(0).type().should.equal('a')
      innerRef.should.have.been.calledOnce('a')
      innerRef.should.have.been.calledWithMatch({ tagName: 'A' })
    })

    it('adds innerRef to our element', () => {
      const innerRef = () => {}
      const wrapper = mount(<ElementType as={Container} innerRef={innerRef} />)
      const child = wrapper.childAt(0)

      child.type().should.equal(Container)
      child.should.have.prop('innerRef', innerRef)
    })

    it('wraps with Ref a third-part element', () => {
      const Element = () => <div />
      const innerRef = () => {}
      const wrapper = mount(<ElementType as={Element} innerRef={innerRef} />)
      const child = wrapper.childAt(0)

      child.type().should.equal(Ref)
      child.should.have.prop('innerRef', innerRef)
      child.childAt(0).type().should.equal(Element)
    })
  })
})
