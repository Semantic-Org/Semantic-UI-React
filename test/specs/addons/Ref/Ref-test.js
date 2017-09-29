import faker from 'faker'
import React from 'react'

import Ref from 'src/addons/Ref/Ref'
import * as common from 'test/specs/commonTests'
import { sandbox } from 'test/utils'
import { CompositeClass, CompositeFunction, DOMClass, DOMFunction } from './fixtures'

const mountNode = (Component, innerRef) => (
  mount(
    <Ref innerRef={innerRef}>
      <Component />
    </Ref>,
  )
    .find('#node')
    .getDOMNode()
)

describe('Ref', () => {
  common.hasValidTypings(Ref)

  describe('children', () => {
    it('renders single child', () => {
      const child = <div data-child={faker.hacker.noun()} />

      shallow(<Ref>{child}</Ref>)
        .should.contain(child)
    })
  })

  describe('innerRef', () => {
    it('returns node from a functional component with DOM node', () => {
      const innerRef = sandbox.spy()
      const node = mountNode(DOMFunction, innerRef)

      innerRef.should.have.been.calledOnce()
      innerRef.should.have.been.calledWithMatch(node)
    })

    it('returns node from a functional component', () => {
      const innerRef = sandbox.spy()
      const node = mountNode(CompositeFunction, innerRef)

      innerRef.should.have.been.calledOnce()
      innerRef.should.have.been.calledWithMatch(node)
    })

    it('returns node from a class component with DOM node', () => {
      const innerRef = sandbox.spy()
      const node = mountNode(DOMClass, innerRef)

      innerRef.should.have.been.calledOnce()
      innerRef.should.have.been.calledWithMatch(node)
    })

    it('returns node from a class component', () => {
      const innerRef = sandbox.spy()
      const node = mountNode(CompositeClass, innerRef)

      innerRef.should.have.been.calledOnce()
      innerRef.should.have.been.calledWithMatch(node)
    })
  })
})
