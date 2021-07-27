import React from 'react'
import { act } from 'react-dom/test-utils'

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

    it('renders `null` when during Server-Side Rendering', () => {
      mount(
        <PortalInner>
          <p />
        </PortalInner>,
      ).should.be.blank()
    })
  })

  describe('ref', () => {
    it('returns ref a DOM element', () => {
      const portalRef = React.createRef()
      const elementRef = React.createRef()

      const wrapper = mount(
        <PortalInner ref={portalRef}>
          <p ref={elementRef} />
        </PortalInner>,
      )
      const domNode = wrapper.getDOMNode()

      expect(elementRef.current).to.equal(domNode)
      expect(portalRef.current).to.equal(domNode)
      expect(domNode.tagName).to.equal('P')
    })

    it('returns ref a elements that uses ref forwarding', () => {
      const CustomComponent = React.forwardRef((props, ref) => {
        return <p {...props} ref={ref} />
      })

      const portalRef = React.createRef()
      const elementRef = React.createRef()

      const wrapper = mount(
        <PortalInner ref={portalRef}>
          <CustomComponent ref={elementRef} />
        </PortalInner>,
      )
      const domNode = wrapper.getDOMNode()

      expect(elementRef.current).to.equal(domNode)
      expect(portalRef.current).to.equal(domNode)
      expect(domNode.tagName).to.equal('P')
    })

    it('returns ref to a create element in other cases', () => {
      function CustomComponent(props) {
        return <p {...props} />
      }

      const portalRef = React.createRef()
      const wrapper = mount(
        <PortalInner ref={portalRef}>
          <CustomComponent />
        </PortalInner>,
      )
      const domNode = wrapper.getDOMNode()

      expect(portalRef.current).to.equal(domNode)
      expect(domNode.tagName).to.equal('DIV')
      expect(domNode.dataset.suirPortal).to.equal('true')
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

      act(() => {
        wrapper.unmount()
      })
      onUnmount.should.have.been.calledOnce()
    })
  })
})
