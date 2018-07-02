import React from 'react'

import Responsive from 'src/addons/Responsive/Responsive'
import { isBrowser } from 'src/lib'
import * as common from 'test/specs/commonTests'
import { domEvent, sandbox } from 'test/utils'

describe('Responsive', () => {
  common.isConformant(Responsive)
  common.rendersChildren(Responsive, {
    rendersContent: false,
  })

  beforeEach(() => {
    sandbox.stub(window, 'requestAnimationFrame').callsArg(0)
  })

  describe('children', () => {
    it('renders by default', () => {
      expect(shallow(<Responsive />)).be.present()
    })
  })

  describe('fireOnMount', () => {
    it('do not fire onUpdate by default', () => {
      const onUpdate = sandbox.spy()
      mount(<Responsive onUpdate={onUpdate} />)

      expect(onUpdate).have.not.been.called()
    })

    it('fires onUpdate after mount when true', () => {
      const onUpdate = sandbox.spy()
      mount(<Responsive fireOnMount onUpdate={onUpdate} />)

      expect(onUpdate).have.been.calledOnce()
    })
  })

  describe('getWidth', () => {
    it('defaults to window.innerWidth when is browser', () => {
      sandbox.stub(window, 'innerWidth').value(500)
      expect(shallow(<Responsive />).state('width')).toBe(500)
    })

    it('defaults to "0" when non-browser', () => {
      isBrowser.override = false

      expect(shallow(<Responsive />).state('width')).toBe(0)

      isBrowser.override = null
    })

    it('allows a custom function that returns a number', () => {
      const getWidth = () => 500
      const wrapper = shallow(<Responsive getWidth={getWidth} />)

      expect(wrapper.state('width')).toBe(500)
    })

    it('is called on resize', () => {
      const getWidth = sandbox.spy()
      mount(<Responsive getWidth={getWidth} />)

      expect(getWidth).have.been.calledOnce()
      getWidth.resetHistory()

      domEvent.fire(window, 'resize')
      expect(getWidth).have.been.calledOnce()
    })
  })

  describe('maxWidth', () => {
    it('renders when fits', () => {
      sandbox.stub(window, 'innerWidth').value(Responsive.onlyMobile.maxWidth)
      expect(shallow(<Responsive {...Responsive.onlyMobile}>Show me!</Responsive>)).not.be.blank()
    })

    it('do not render when not fits', () => {
      sandbox.stub(window, 'innerWidth').value(Responsive.onlyTablet.maxWidth)
      expect(shallow(<Responsive {...Responsive.onlyMobile}>Hide me!</Responsive>)).be.blank()
    })
  })

  describe('minWidth', () => {
    it('renders when fits', () => {
      sandbox.stub(window, 'innerWidth').value(Responsive.onlyMobile.minWidth)
      expect(shallow(<Responsive {...Responsive.onlyMobile}>Show me!</Responsive>)).not.be.blank()
    })

    it('do not render when not fits', () => {
      sandbox.stub(window, 'innerWidth').value(Responsive.onlyTablet.minWidth)
      expect(shallow(<Responsive {...Responsive.onlyMobile}>Hide me!</Responsive>)).be.blank()
    })
  })

  describe('on window.resize', () => {
    it('renders using new width', () => {
      sandbox.stub(window, 'innerWidth').value(Responsive.onlyMobile.minWidth)
      const wrapper = mount(<Responsive {...Responsive.onlyMobile}>Mobile only</Responsive>)
      expect(wrapper).not.be.blank()

      sandbox.stub(window, 'innerWidth').value(Responsive.onlyTablet.minWidth)
      domEvent.fire(window, 'resize')

      wrapper.update()
      expect(wrapper).be.blank()
    })
  })

  describe('onUpdate', () => {
    it('is called with (e, data) when window was resized', () => {
      const onUpdate = sandbox.spy()
      const width = Responsive.onlyTablet.minWidth
      mount(<Responsive {...Responsive.onlyMobile} onUpdate={onUpdate} />)

      sandbox.stub(window, 'innerWidth').value(width)
      domEvent.fire(window, 'resize')

      expect(onUpdate).have.been.calledOnce()
      expect(onUpdate).have.been.calledWithMatch({}, { ...Responsive.onlyMobile, width })
    })
  })

  describe('shouldComponentUpdate', () => {
    it('returns true when width changes', () => {
      sandbox.stub(window, 'innerWidth').value(Responsive.onlyMobile.minWidth)
      const wrapper = mount(<Responsive />)
      const instance = wrapper.instance()
      const spy = sandbox.spy(instance, 'shouldComponentUpdate')

      sandbox.stub(window, 'innerWidth').value(Responsive.onlyTablet.minWidth)
      domEvent.fire(window, 'resize')
      expect(spy).have.returned(true)
    })

    it('returns false when width stays the same', () => {
      sandbox.stub(window, 'innerWidth').value(Responsive.onlyMobile.minWidth)
      const wrapper = mount(<Responsive />)
      const instance = wrapper.instance()
      const spy = sandbox.spy(instance, 'shouldComponentUpdate')

      domEvent.fire(window, 'resize')
      expect(spy).have.returned(false)
    })

    it('returns true when props change', () => {
      const wrapper = mount(<Responsive {...Responsive.onlyMobile} />)
      const instance = wrapper.instance()
      const spy = sandbox.spy(instance, 'shouldComponentUpdate')

      wrapper.setProps({ ...Responsive.onlyTablet })
      expect(spy).have.returned(true)
    })
  })
})
