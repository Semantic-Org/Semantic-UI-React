import React from 'react'

import Responsive from 'src/addons/Responsive/Responsive'
import { isBrowser } from 'src/lib'
import * as common from 'test/specs/commonTests'
import { domEvent } from 'test/utils'

describe('Responsive', () => {
  common.isConformant(Responsive)
  common.rendersChildren(Responsive, {
    rendersContent: false,
  })

  beforeEach(() => {
    jest.spyOn(window, 'requestAnimationFrame').mockImplementation(cb => cb())
  })

  describe('children', () => {
    it('renders by default', () => {
      expect(shallow(<Responsive>Visible</Responsive>).children()).toHaveLength(1)
    })
  })

  describe('fireOnMount', () => {
    it('do not fire onUpdate by default', () => {
      const onUpdate = jest.fn()
      mount(<Responsive onUpdate={onUpdate} />)

      expect(onUpdate).not.toHaveBeenCalled()
    })

    it('fires onUpdate after mount when true', () => {
      const onUpdate = jest.fn()
      mount(<Responsive fireOnMount onUpdate={onUpdate} />)

      expect(onUpdate).toHaveBeenCalledTimes(1)
    })
  })

  describe('getWidth', () => {
    it('defaults to window.innerWidth when is browser', () => {
      global.innerWidth = 500
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
      const getWidth = jest.fn()
      mount(<Responsive getWidth={getWidth} />)

      expect(getWidth).toHaveBeenCalledTimes(1)
      getWidth.mockClear()

      domEvent.fire(window, 'resize')
      expect(getWidth).toHaveBeenCalledTimes(1)
    })
  })

  describe('maxWidth', () => {
    it('renders when fits', () => {
      global.innerWidth = Responsive.onlyMobile.maxWidth
      expect(
        shallow(<Responsive {...Responsive.onlyMobile}>Show me!</Responsive>).children(),
      ).toHaveLength(1)
    })

    it('do not render when not fits', () => {
      global.innerWidth = Responsive.onlyTablet.maxWidth
      expect(
        shallow(<Responsive {...Responsive.onlyMobile}>Hide me!</Responsive>).children(),
      ).toHaveLength(0)
    })
  })

  describe('minWidth', () => {
    it('renders when fits', () => {
      global.innerWidth = Responsive.onlyMobile.minWidth
      expect(
        shallow(<Responsive {...Responsive.onlyMobile}>Show me!</Responsive>).children(),
      ).toHaveLength(1)
    })

    it('do not render when not fits', () => {
      global.innerWidth = Responsive.onlyTablet.minWidth
      expect(
        shallow(<Responsive {...Responsive.onlyMobile}>Hide me!</Responsive>).children(),
      ).toHaveLength(0)
    })
  })

  describe('on window.resize', () => {
    it('renders using new width', () => {
      global.innerWidth = Responsive.onlyMobile.minWidth
      const wrapper = mount(<Responsive {...Responsive.onlyMobile}>Mobile only</Responsive>)
      expect(wrapper.children()).toHaveLength(1)

      global.innerWidth = Responsive.onlyTablet.minWidth
      domEvent.fire(window, 'resize')

      wrapper.update()
      expect(wrapper.children()).toHaveLength(0)
    })
  })

  describe('onUpdate', () => {
    it('is called with (e, data) when window was resized', () => {
      const onUpdate = jest.fn()
      const width = Responsive.onlyTablet.minWidth
      mount(<Responsive {...Responsive.onlyMobile} onUpdate={onUpdate} />)

      global.innerWidth = width
      domEvent.fire(window, 'resize')

      expect(onUpdate).toHaveBeenCalledTimes(1)
      expect(onUpdate).toHaveBeenCalledWith(
        expect.any(Object),
        expect.objectContaining({ ...Responsive.onlyMobile, width }),
      )
    })
  })

  describe('shouldComponentUpdate', () => {
    it('renders when width changes', () => {
      global.innerWidth = Responsive.onlyMobile.minWidth
      const wrapper = mount(<Responsive />)
      const instance = wrapper.instance()
      const render = jest.spyOn(instance, 'render')

      global.innerWidth = Responsive.onlyTablet.minWidth
      domEvent.fire(window, 'resize')
      expect(render).toHaveBeenCalled()
    })

    it('do not render when width stays the same', () => {
      global.innerWidth = Responsive.onlyMobile.minWidth
      const wrapper = mount(<Responsive />)
      const instance = wrapper.instance()
      const render = jest.spyOn(instance, 'render')

      domEvent.fire(window, 'resize')
      expect(render).not.toHaveBeenCalled()
    })

    it('renders when props change', () => {
      const wrapper = shallow(<Responsive {...Responsive.onlyMobile} />)
      const instance = wrapper.instance()
      const render = jest.spyOn(instance, 'render')

      wrapper.setProps({ ...Responsive.onlyTablet })
      expect(render).toHaveBeenCalled()
    })
  })
})
