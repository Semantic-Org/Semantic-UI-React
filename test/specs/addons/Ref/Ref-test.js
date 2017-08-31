import _ from 'lodash'
import React from 'react'

import Ref from 'src/addons/Ref/Ref'
import * as common from 'test/specs/commonTests'
import { sandbox } from 'test/utils'
import { CompositeClass, CompositeFunction, DOMClass, DOMFunction } from './fixtures'

const nodeMount = (Component, innerRef) => (
  mount(
    <Ref innerRef={innerRef}>
      <Component />
    </Ref>,
  )
    .find('#node')
    .getDOMNode()
)

describe('Ref', () => {
  common.hasValidTypings(Ref, null, {
    requiredProps: {
      children: <div />,
      innerRef: _.noop,
    },
  })

  describe('innerRef', () => {
    it('returns node from a functional component with DOM node', () => {
      const innerRef = sandbox.spy()
      const node = nodeMount(DOMFunction, innerRef)

      innerRef.should.have.been.calledOnce()
      innerRef.should.have.been.calledWithMatch(node)
    })

    it('returns node from a functional component', () => {
      const innerRef = sandbox.spy()
      const node = nodeMount(CompositeFunction, innerRef)

      innerRef.should.have.been.calledOnce()
      innerRef.should.have.been.calledWithMatch(node)
    })

    it('returns node from a class component with DOM node', () => {
      const innerRef = sandbox.spy()
      const node = nodeMount(DOMClass, innerRef)

      innerRef.should.have.been.calledOnce()
      innerRef.should.have.been.calledWithMatch(node)
    })

    it('returns node from a class component', () => {
      const innerRef = sandbox.spy()
      const node = nodeMount(CompositeClass, innerRef)

      innerRef.should.have.been.calledOnce()
      innerRef.should.have.been.calledWithMatch(node)
    })
  })
})
