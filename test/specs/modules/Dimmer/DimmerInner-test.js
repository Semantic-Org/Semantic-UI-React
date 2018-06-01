import faker from 'faker'
import React from 'react'

import DimmerInner from 'src/modules/Dimmer/DimmerInner'
import * as common from 'test/specs/commonTests'
import { sandbox } from 'test/utils'

describe('DimmerInner', () => {
  common.isConformant(DimmerInner)
  common.hasUIClassName(DimmerInner)
  common.rendersChildren(DimmerInner)

  common.implementsVerticalAlignProp(DimmerInner, ['bottom', 'top'])

  common.propKeyOnlyToClassName(DimmerInner, 'active', {
    className: 'active transition visible',
  })
  common.propKeyOnlyToClassName(DimmerInner, 'disabled')
  common.propKeyOnlyToClassName(DimmerInner, 'inverted')
  common.propKeyOnlyToClassName(DimmerInner, 'simple')

  describe('onClickOutside', () => {
    it('called when Dimmer has not children', () => {
      const onClickOutside = sandbox.spy()
      shallow(<DimmerInner onClickOutside={onClickOutside} />).simulate('click')

      onClickOutside.should.have.been.calledOnce()
    })

    it('omitted when click on children', () => {
      const onClickOutside = sandbox.spy()
      const wrapper = mount(
        <DimmerInner onClickOutside={onClickOutside}>
          <div>{faker.hacker.phrase()}</div>
        </DimmerInner>,
        {
          attachTo: document.body,
        },
      )

      wrapper
        .find('div.content')
        .childAt(0)
        .simulate('click')
      onClickOutside.should.have.been.callCount(0)
    })

    it('called when click on Dimmer', () => {
      const onClickOutside = sandbox.spy()

      mount(
        <DimmerInner onClickOutside={onClickOutside}>{faker.hacker.phrase()}</DimmerInner>,
      ).simulate('click')
      onClickOutside.should.have.been.calledOnce()
    })

    it('called when click on center', () => {
      const onClickOutside = sandbox.spy()
      const wrapper = mount(
        <DimmerInner onClickOutside={onClickOutside}>{faker.hacker.phrase()}</DimmerInner>,
      )

      wrapper.find('div.content').simulate('click')
      onClickOutside.should.have.been.calledOnce()
    })
  })
})
