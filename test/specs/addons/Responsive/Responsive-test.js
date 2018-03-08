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
    it('renders using new width', (done) => {
      sandbox.stub(window, 'innerWidth').value(Responsive.onlyMobile.minWidth)
      const wrapper = mount(<Responsive {...Responsive.onlyMobile}>Mobile only</Responsive>)
      wrapper.should.be.not.be.blank()

      sandbox.stub(window, 'innerWidth').value(Responsive.onlyTablet.minWidth)
      domEvent.fire(window, 'resize')

      requestAnimationFrame(() => {
        wrapper.update()
        wrapper.should.be.blank()
        done()
      })
    })
  })

  describe('shouldComponentUpdate', () => {
    it('returns true when width changes', (done) => {
      sandbox.stub(window, 'innerWidth').value(Responsive.onlyMobile.minWidth)
      const wrapper = mount(<Responsive />)
      const instance = wrapper.instance()
      const spy = sandbox.spy(instance, 'shouldComponentUpdate')

      sandbox.stub(window, 'innerWidth').value(Responsive.onlyTablet.minWidth)
      domEvent.fire(window, 'resize')

      requestAnimationFrame(() => {
        spy.should.have.returned(true)
        done()
      })
    })

    it('returns false when width stays the same', (done) => {
      sandbox.stub(window, 'innerWidth').value(Responsive.onlyMobile.minWidth)
      const wrapper = mount(<Responsive />)
      const instance = wrapper.instance()
      const spy = sandbox.spy(instance, 'shouldComponentUpdate')

      domEvent.fire(window, 'resize')

      requestAnimationFrame(() => {
        spy.should.have.returned(false)
        done()
      })
    })

    it('returns true when props change', () => {
      const wrapper = mount(<Responsive {...Responsive.onlyMobile} />)
      const instance = wrapper.instance()
      const spy = sandbox.spy(instance, 'shouldComponentUpdate')

      wrapper.setProps({ ...Responsive.onlyTablet })

      spy.should.have.returned(true)
    })
  })

  describe('onUpdate', () => {
    it('is called with (e, data) when window was resized', (done) => {
      const onUpdate = sandbox.spy()
      const width = Responsive.onlyTablet.minWidth
      mount(<Responsive {...Responsive.onlyMobile} onUpdate={onUpdate} />)

      sandbox.stub(window, 'innerWidth').value(width)
      domEvent.fire(window, 'resize')

      requestAnimationFrame(() => {
        onUpdate.should.have.been.calledOnce()
        onUpdate.should.have.been.calledWithMatch({}, { ...Responsive.onlyMobile, width })

        done()
      })
    })
  })

  describe('getWidth', () => {
    it('defaults browser to use window.innerWidth', () => {
      const width = 500
      sandbox.stub(window, 'innerWidth').value(width)

      const wrapper = shallow(<Responsive />)

      wrapper.state('width').should.equal(width)
    })

    it('defaults non-browser to use 0', () => {
      isBrowser.override = false

      const wrapper = shallow(<Responsive />)

      wrapper.state('width').should.equal(0)

      isBrowser.override = null
    })

    it('allows a custom function that returns a number', () => {
      const getWidth = () => 500
      const wrapper = shallow(<Responsive getWidth={getWidth} />)

      wrapper.state('width').should.equal(500)
    })

    it('is called on resize', () => {
      const getWidth = sandbox.stub()

      const wrapper = mount(<Responsive getWidth={getWidth} />)
      getWidth.should.have.been.calledOnce()
      getWidth.reset()

      getWidth.returns(500)
      domEvent.fire(window, 'resize')

      requestAnimationFrame(() => {
        getWidth.should.have.been.calledOnce()
        wrapper.state('width').should.equal(500)
      })
    })
  })
})
