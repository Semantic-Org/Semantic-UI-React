import faker from 'faker'
import React from 'react'

import Ref from 'src/addons/Ref/Ref'
import * as common from 'test/specs/commonTests'
import { CompositeClass, ForwardedRef } from './fixtures'

describe('Ref', () => {
  common.isConformant(Ref, { rendersChildren: false })

  describe('children', () => {
    it('renders single child', () => {
      const child = <div data-child={faker.hacker.noun()} />

      shallow(<Ref>{child}</Ref>).should.contain(child)
    })

    it('renders RefFindNode when a component is passed', () => {
      const innerRef = React.createRef()
      const wrapper = shallow(
        <Ref innerRef={innerRef}>
          <CompositeClass />
        </Ref>,
      )

      wrapper.should.have.type(Ref.FindNode)
    })

    it('renders RefForward when a component wrapper with forwardRef() is passed', () => {
      const innerRef = React.createRef()
      const wrapper = shallow(
        <Ref innerRef={innerRef}>
          <ForwardedRef />
        </Ref>,
      )

      wrapper.should.have.type(Ref.Forward)
    })
  })
})
