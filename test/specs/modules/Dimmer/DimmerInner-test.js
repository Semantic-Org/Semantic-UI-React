import faker from 'faker'
import React from 'react'

import DimmerInner from 'src/modules/Dimmer/DimmerInner'
import * as common from 'test/specs/commonTests'

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

  describe('active', () => {
    it('adds "display: flex" after set to "true"', () => {
      const mountNode = document.createElement('div')
      document.body.appendChild(mountNode)

      const wrapper = mount(<DimmerInner />, { attachTo: mountNode })
      const dimmer = document.querySelector('.ui.dimmer')

      expect(dimmer.style.display).toBe('')

      wrapper.setProps({ active: true })
      expect(dimmer.style.display).toBe('flex')

      wrapper.detach()
      document.body.removeChild(mountNode)
    })
  })

  describe('onClickOutside', () => {
    it('called when Dimmer has not children', () => {
      const onClickOutside = jest.fn()
      shallow(<DimmerInner onClickOutside={onClickOutside} />).simulate('click')

      expect(onClickOutside).toHaveBeenCalledTimes(1)
    })

    it('omitted when click on children', () => {
      const element = document.createElement('div')
      document.body.appendChild(element)
      const onClickOutside = jest.fn()
      const wrapper = mount(
        <DimmerInner onClickOutside={onClickOutside}>
          <div>{faker.hacker.phrase()}</div>
        </DimmerInner>,
        {
          attachTo: element,
        },
      )

      wrapper
        .find('div.content')
        .childAt(0)
        .simulate('click')
      expect(onClickOutside).not.toHaveBeenCalled()

      wrapper.unmount()
      document.body.removeChild(element)
    })

    it('called when click on Dimmer', () => {
      const onClickOutside = jest.fn()

      mount(
        <DimmerInner onClickOutside={onClickOutside}>{faker.hacker.phrase()}</DimmerInner>,
      ).simulate('click')
      expect(onClickOutside).toHaveBeenCalledTimes(1)
    })

    it('called when click on center', () => {
      const onClickOutside = jest.fn()
      const wrapper = mount(
        <DimmerInner onClickOutside={onClickOutside}>{faker.hacker.phrase()}</DimmerInner>,
      )

      wrapper.find('div.content').simulate('click')
      expect(onClickOutside).toHaveBeenCalledTimes(1)
    })
  })
})
