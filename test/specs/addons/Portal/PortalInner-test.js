import React from 'react'

import PortalInner from 'src/addons/Portal/PortalInner'
import * as common from 'test/specs/commonTests'
import { sandbox } from 'test/utils'

describe('PortalInner', () => {
  common.isConformant(PortalInner, {
    rendersChildren: false,
    requiredProps: { children: <p /> },
  })

  describe('onMount', () => {
    it('called when mounting', () => {
      const onMount = sandbox.spy()
      mount(
        <PortalInner onMount={onMount}>
          <p />
        </PortalInner>,
      )

      onMount.should.have.been.calledOnce()
    })
  })

  describe('onUnmount', () => {
    it('is called only once when unmounting', () => {
      const onUnmount = sandbox.spy()
      const wrapper = mount(
        <PortalInner onUnmount={onUnmount}>
          <p />
        </PortalInner>,
      )

      wrapper.unmount()
      onUnmount.should.have.been.calledOnce()
    })
  })
})
