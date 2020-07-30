import React from 'react'

import Responsive from 'src/addons/Responsive/Responsive'
import { isBrowser } from 'src/lib'
import * as common from 'test/specs/commonTests'
import { consoleUtil, domEvent, sandbox } from 'test/utils'

describe('Responsive', () => {
  it('a render to strip deprecation warning', () => {
    consoleUtil.disableOnce()
    mount(<Responsive />)
  })

  common.isConformant(Responsive)
  common.rendersChildren(Responsive, {
    rendersContent: false,
  })

  beforeEach(() => {
    sandbox.stub(window, 'requestAnimationFrame').callsArg(0)
  })

  describe('children', () => {
    it('renders by default', () => {
      mount(<Responsive />).should.be.present()
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
      const { getWidth } = mount(<Responsive />).instance().props
      getWidth().should.equal(500)
    })

    it('defaults to "0" when non-browser', () => {
      isBrowser.override = false

      const { getWidth } = mount(<Responsive />).instance().props
      getWidth().should.equal(0)

      isBrowser.override = null
    })

    it('allows a custom function that returns a number', () => {
      const getWidth = sandbox.spy(() => 500)
      mount(<Responsive getWidth={getWidth} />)
      getWidth.should.have.been.calledOnce()
      getWidth.should.have.returned(500)
    })

    it('is called on resize', () => {
      const getWidth = sandbox.spy()
      mount(<Responsive getWidth={getWidth} />)

      getWidth.should.have.been.calledOnce()
      getWidth.resetHistory()

      domEvent.fire(window, 'resize')
      getWidth.should.have.been.calledOnce()
    })
  })

  describe('maxWidth', () => {
    it('renders when fits', () => {
      sandbox.stub(window, 'innerWidth').value(Responsive.onlyMobile.maxWidth)
      mount(<Responsive {...Responsive.onlyMobile}>Show me!</Responsive>).should.not.be.blank()
    })

    it('renders when next maxWidth fits', () => {
      sandbox.stub(window, 'innerWidth').value(Responsive.onlyTablet.maxWidth)
      const wrapper = mount(<Responsive {...Responsive.onlyMobile} />)
      wrapper.should.be.blank()
      wrapper.setProps({ ...Responsive.onlyTablet })
      wrapper.update()
      wrapper.should.not.be.blank()
    })

    it('renders when next getWidth makes maxWidth fit', () => {
      sandbox.stub(window, 'innerWidth').value(Responsive.onlyTablet.maxWidth)
      const wrapper = mount(<Responsive {...Responsive.onlyMobile} />)
      wrapper.should.be.blank()
      const getWidth = () => Responsive.onlyMobile.maxWidth
      wrapper.setProps({ getWidth })
      wrapper.update()
      wrapper.should.not.be.blank()
    })

    it('do not render when not fits', () => {
      sandbox.stub(window, 'innerWidth').value(Responsive.onlyTablet.maxWidth)
      mount(<Responsive {...Responsive.onlyMobile}>Hide me!</Responsive>).should.be.blank()
    })
  })

  describe('minWidth', () => {
    it('renders when fits', () => {
      sandbox.stub(window, 'innerWidth').value(Responsive.onlyMobile.minWidth)
      mount(<Responsive {...Responsive.onlyMobile}>Show me!</Responsive>).should.not.be.blank()
    })

    it('renders when next minWidth fits', () => {
      sandbox.stub(window, 'innerWidth').value(Responsive.onlyMobile.minWidth)
      const wrapper = mount(<Responsive {...Responsive.onlyTablet} />)
      wrapper.should.be.blank()
      wrapper.setProps({ ...Responsive.onlyMobile })
      wrapper.update()
      wrapper.should.not.be.blank()
    })

    it('renders when next getWidth makes minWidth fit', () => {
      sandbox.stub(window, 'innerWidth').value(Responsive.onlyMobile.maxWidth)
      const wrapper = mount(<Responsive {...Responsive.onlyTablet} />)
      wrapper.should.be.blank()
      const getWidth = () => Responsive.onlyTablet.minWidth
      wrapper.setProps({ getWidth })
      wrapper.update()
      wrapper.should.not.be.blank()
    })

    it('do not render when not fits', () => {
      sandbox.stub(window, 'innerWidth').value(Responsive.onlyTablet.minWidth)
      mount(<Responsive {...Responsive.onlyMobile}>Hide me!</Responsive>).should.be.blank()
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

  describe('render', () => {
    it('does not re render if fit does not change', () => {
      sandbox.stub(window, 'innerWidth').value(Responsive.onlyTablet.minWidth + 1)

      const wrapper = mount(<Responsive {...Responsive.onlyTablet} />)
      const instance = wrapper.instance()
      const render = sandbox.spy(instance, 'render')

      domEvent.fire(window, 'resize')
      render.should.not.have.been.called()
    })

    it('re renders if fit changes', () => {
      sandbox.stub(window, 'innerWidth').value(Responsive.onlyTablet.minWidth)

      const wrapper = mount(<Responsive {...Responsive.onlyTablet} />)
      const instance = wrapper.instance()
      const render = sandbox.spy(instance, 'render')

      sandbox.stub(window, 'innerWidth').value(Responsive.onlyTablet.minWidth - 1)
      domEvent.fire(window, 'resize')

      render.should.have.been.calledOnce()
    })

    it('re renders when props change', () => {
      const wrapper = mount(<Responsive {...Responsive.onlyMobile} />)
      const instance = wrapper.instance()
      const render = sandbox.spy(instance, 'render')

      wrapper.setProps({ as: 'h1' })
      render.should.have.been.called()
    })
  })
})
