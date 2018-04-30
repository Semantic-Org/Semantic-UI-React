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

  let requestAnimationFrame

  before(() => {
    requestAnimationFrame = window.requestAnimationFrame
    window.requestAnimationFrame = fn => fn()
  })

  after(() => {
    window.requestAnimationFrame = requestAnimationFrame
  })

  describe('children', () => {
    it('renders by default', () => {
      shallow(<Responsive />)
        .should.be.present()
    })
  })

  describe('fireOnMount', () => {
    it('do not fire onUpdate by default', () => {
      const onUpdate = sandbox.spy()
      mount(<Responsive onUpdate={onUpdate} />)

      onUpdate.should.have.not.been.called()
    })

    it('fires onUpdate after mount when true', () => {
      const onUpdate = sandbox.spy()
      mount(<Responsive fireOnMount onUpdate={onUpdate} />)

      onUpdate.should.have.been.calledOnce()
    })
  })

  describe('getWidth', () => {
    it('defaults to window.innerWidth when is browser', () => {
      sandbox.stub(window, 'innerWidth').value(500)
      shallow(<Responsive />)
        .state('width')
        .should.equal(500)
    })

    it('defaults to "0" when non-browser', () => {
      isBrowser.override = false

      shallow(<Responsive />)
        .state('width')
        .should.equal(0)

      isBrowser.override = null
    })

    it('allows a custom function that returns a number', () => {
      const getWidth = () => 500
      const wrapper = shallow(<Responsive getWidth={getWidth} />)

      wrapper
        .state('width')
        .should.equal(500)
    })

    it('is called on resize', () => {
      const getWidth = sandbox.spy()
      mount(<Responsive getWidth={getWidth} />)

      getWidth.should.have.been.calledOnce()
      getWidth.reset()

      domEvent.fire(window, 'resize')
      getWidth.should.have.been.calledOnce()
    })
  })

  describe('maxWidth', () => {
    it('renders when fits', () => {
      sandbox.stub(window, 'innerWidth').value(Responsive.onlyMobile.maxWidth)
      shallow(<Responsive {...Responsive.onlyMobile}>Show me!</Responsive>)
        .should.not.be.blank()
    })

    it('do not render when not fits', () => {
      sandbox.stub(window, 'innerWidth').value(Responsive.onlyTablet.maxWidth)
      shallow(<Responsive {...Responsive.onlyMobile}>Hide me!</Responsive>)
        .should.be.blank()
    })
  })

  describe('minWidth', () => {
    it('renders when fits', () => {
      sandbox.stub(window, 'innerWidth').value(Responsive.onlyMobile.minWidth)
      shallow(<Responsive {...Responsive.onlyMobile}>Show me!</Responsive>)
        .should.not.be.blank()
    })

    it('do not render when not fits', () => {
      sandbox.stub(window, 'innerWidth').value(Responsive.onlyTablet.minWidth)
      shallow(<Responsive {...Responsive.onlyMobile}>Hide me!</Responsive>)
        .should.be.blank()
    })
  })

  describe('on window.resize', () => {
    it('renders using new width', () => {
      sandbox.stub(window, 'innerWidth').value(Responsive.onlyMobile.minWidth)
      const wrapper = mount(<Responsive {...Responsive.onlyMobile}>Mobile only</Responsive>)
      wrapper.should.not.be.blank()

      sandbox.stub(window, 'innerWidth').value(Responsive.onlyTablet.minWidth)
      domEvent.fire(window, 'resize')

      wrapper.update()
      wrapper.should.be.blank()
    })
  })

  describe('onUpdate', () => {
    it('is called with (e, data) when window was resized', () => {
      const onUpdate = sandbox.spy()
      const width = Responsive.onlyTablet.minWidth
      mount(<Responsive {...Responsive.onlyMobile} onUpdate={onUpdate} />)

      sandbox.stub(window, 'innerWidth').value(width)
      domEvent.fire(window, 'resize')

      onUpdate.should.have.been.calledOnce()
      onUpdate.should.have.been.calledWithMatch({}, { ...Responsive.onlyMobile, width })
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
      spy.should.have.returned(true)
    })

    it('returns false when width stays the same', () => {
      sandbox.stub(window, 'innerWidth').value(Responsive.onlyMobile.minWidth)
      const wrapper = mount(<Responsive />)
      const instance = wrapper.instance()
      const spy = sandbox.spy(instance, 'shouldComponentUpdate')

      domEvent.fire(window, 'resize')
      spy.should.have.returned(false)
    })

    it('returns true when props change', () => {
      const wrapper = mount(<Responsive {...Responsive.onlyMobile} />)
      const instance = wrapper.instance()
      const spy = sandbox.spy(instance, 'shouldComponentUpdate')

      wrapper.setProps({ ...Responsive.onlyTablet })
      spy.should.have.returned(true)
    })
  })
})
