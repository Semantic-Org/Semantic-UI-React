import React from 'react'

import RefFindNode from 'src/addons/Ref/RefFindNode'
import * as common from 'test/specs/commonTests'
import { sandbox } from 'test/utils'
import { CompositeClass, CompositeFunction, DOMClass, DOMFunction } from './fixtures'

const mountNode = (Component, innerRef) =>
  mount(
    <RefFindNode innerRef={innerRef}>
      <Component />
    </RefFindNode>,
  )
    .find('#node')
    .getDOMNode()

describe('RefFindNode', () => {
  common.isConformant(RefFindNode, { rendersChildren: false })

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
