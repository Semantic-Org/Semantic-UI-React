import React from 'react'

import PortalInner from 'src/addons/Portal/PortalInner'
import * as common from 'test/specs/commonTests'

describe('PortalInner', () => {
  common.isConformant(PortalInner, {
    rendersChildren: false,
    requiredProps: { children: <p /> },
  })

  describe('onMount', () => {
    it('called when mounting', () => {
      const onMount = jest.fn()
      mount(
        <PortalInner onMount={onMount}>
          <p />
        </PortalInner>,
      )

      expect(onMount).toHaveBeenCalledTimes(1)
    })
  })

  describe('onUnmount', () => {
    it('is called only once when unmounting', () => {
      const onUnmount = jest.fn()
      const wrapper = mount(
        <PortalInner onUnmount={onUnmount}>
          <p />
        </PortalInner>,
      )

      wrapper.unmount()
      expect(onUnmount).toHaveBeenCalledTimes(1)
    })
  })
})
