import React, { createRef } from 'react'

import PortalInner from 'src/addons/Portal/PortalInner'
import { isBrowser } from 'src/lib'
import * as common from 'test/specs/commonTests'
import { sandbox } from 'test/utils'

describe('PortalInner', () => {
  common.isConformant(PortalInner, {
    rendersChildren: false,
    requiredProps: { children: <p /> },
  })

  describe('children', () => {
    before(() => {
      isBrowser.override = false
    })

    after(() => {
      isBrowser.override = null
    })

    it('renders `null` when is SSR', () => {
      mount(
        <PortalInner>
          <p />
        </PortalInner>,
      ).should.be.blank()
    })
  })

  describe('innerRef', () => {
    it('returns ref', () => {
      const innerRef = createRef()
      const wrapper = mount(
        <PortalInner innerRef={innerRef}>
          <p />
        </PortalInner>,
      )

      expect(wrapper.getDOMNode()).to.equal(innerRef.current)
    })
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
