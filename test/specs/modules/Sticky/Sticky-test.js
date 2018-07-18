import _ from 'lodash'
import React from 'react'

import Sticky from 'src/modules/Sticky/Sticky'
import * as common from 'test/specs/commonTests'
import { domEvent } from 'test/utils'

let contextEl
let wrapper
let positions

const mockRect = (values = {}) => ({ getBoundingClientRect: () => values })

const mockContextEl = (values = {}) => (contextEl = mockRect(values))

const mockPositions = ({ bottomOffset = 5, offset = 5, height = 5 } = {}) =>
  (positions = {
    bottomOffset,
    height,
    offset,
  })

const wrapperMount = (...args) => (wrapper = mount(...args))

// Scroll to the top of the screen
const scrollToTop = () => {
  const { bottomOffset, height, offset } = positions
  const instance = wrapper.instance()

  instance.triggerRef = mockRect({ top: offset })
  instance.stickyRef = mockRect({ height, top: offset })
  wrapper.setProps({ context: mockRect({ bottom: height + offset + bottomOffset }) })

  domEvent.scroll(window)
}

// Scroll until the trigger is not visible
const scrollAfterTrigger = () => {
  const { bottomOffset, height, offset } = positions
  const instance = wrapper.instance()

  instance.triggerRef = mockRect({ top: offset - 1 })
  instance.stickyRef = mockRect({ height })
  wrapper.setProps({ context: mockRect({ bottom: window.innerHeight - bottomOffset + 1 }) })

  domEvent.scroll(window)
}

// Scroll until the context bottom is not visible
const scrollAfterContext = () => {
  const { height, offset } = positions
  const instance = wrapper.instance()

  instance.triggerRef = mockRect({ top: offset - 1 })
  instance.stickyRef = mockRect({ height })
  wrapper.setProps({ context: mockRect({ bottom: -1 }) })

  domEvent.scroll(window)
}

// Scroll to the last part of the context
const scrollToContextBottom = () => {
  const { height, offset } = positions
  const instance = wrapper.instance()

  instance.triggerRef = mockRect({ top: offset - 1 })
  instance.stickyRef = mockRect({ height })
  wrapper.setProps({ context: mockRect({ bottom: height + 1 }) })

  domEvent.scroll(window)
}

describe('Sticky', () => {
  common.isConformant(Sticky)
  common.rendersChildren(Sticky, {
    rendersContent: false,
  })

  beforeEach(() => {
    global.requestAnimationFrame = callback => callback()
    wrapper = undefined
  })

  afterEach(() => {
    if (wrapper && wrapper.unmount) wrapper.unmount()
  })

  describe('children', () => {
    it('should create two divs', () => {
      const children = shallow(<Sticky />).children()

      expect(children).toHaveLength(2)
      children.everyWhere(child => expect(child.type()).toBe('div'))
    })
  })

  describe('active', () => {
    it('should handle update on mount when active', () => {
      const onTop = jest.fn()
      mount(<Sticky context={mockContextEl()} onTop={onTop} />)

      expect(onTop).toHaveBeenCalledTimes(1)
    })

    it('should not handle update on mount when not active', () => {
      const onTop = jest.fn()
      mount(<Sticky active={false} context={mockContextEl()} onTop={onTop} />)

      expect(onTop).not.toHaveBeenCalled()
    })

    it('fires event when changes to true', () => {
      const onTop = jest.fn()
      wrapperMount(<Sticky active={false} context={mockContextEl()} onTop={onTop} />)
      expect(onTop).not.toHaveBeenCalled()

      wrapper.setProps({ active: true })
      expect(onTop).toHaveBeenCalledTimes(1)
    })

    it('omits event and removes styles when changes to false', () => {
      const onStick = jest.fn()
      const onUnStick = jest.fn()
      mockContextEl()
      mockPositions({ bottomOffset: 10, height: 50 })
      wrapperMount(
        <Sticky {...positions} context={contextEl} onStick={onStick} onUnstick={onUnStick} />,
      )

      _.forEach(['ui', 'sticky', 'fixed', 'top'], className =>
        expect(wrapper.childAt(0).childAt(1).hasClass(className)).toBe(true),
      )
      expect(onStick).toHaveBeenCalledTimes(1)
      expect(onStick).toHaveBeenCalledWith(undefined, expect.objectContaining(positions))

      wrapper.setProps({ active: false })
      scrollToTop()
      expect(wrapper.childAt(0).childAt(1)).have.not.className('fixed')
      expect(onUnStick).not.toHaveBeenCalled()
    })
  })

  describe('behaviour', () => {
    it('should stick to top of screen', () => {
      mockContextEl()
      mockPositions({ bottomOffset: 12, height: 200, offset: 12 })
      wrapperMount(<Sticky {...positions} context={contextEl} />)

      // Scroll after trigger
      scrollAfterTrigger()

      _.forEach(['ui', 'sticky', 'fixed', 'top'], className =>
        expect(wrapper.childAt(0).childAt(1).hasClass(className)).toBe(true),
      )
      expect(wrapper.childAt(0).childAt(1)).have.style('top', '12px')
    })

    it('should stick to bottom of context', () => {
      mockContextEl()
      mockPositions({ bottomOffset: 10, height: 100, offset: 20 })
      wrapperMount(<Sticky {...positions} context={contextEl} />)

      scrollAfterContext()
      _.forEach(['ui', 'sticky', 'bound', 'bottom'], className =>
        expect(wrapper.childAt(0).childAt(1).hasClass(className)).toBe(true),
      )
      expect(wrapper.childAt(0).childAt(1)).have.style('bottom', '0px')
    })
  })
  describe('onBottom', () => {
    it('is called with (e, data) when is on bottom', () => {
      const onBottom = jest.fn()
      mockContextEl()
      mockPositions()
      wrapperMount(<Sticky {...positions} context={contextEl} onBottom={onBottom} />)

      scrollAfterContext()
      expect(onBottom).toHaveBeenCalledTimes(1)
      expect(onBottom).toHaveBeenCalledWith(expect.any(Object), expect.objectContaining(positions))
      onBottom.resetHistory()

      scrollToTop()
      expect(onBottom).not.toHaveBeenCalled()
    })
  })

  describe('onStick', () => {
    it('is called with (e, data) when stick', () => {
      const onStick = jest.fn()
      mockContextEl()
      mockPositions({ bottomOffset: 10, height: 50 })
      wrapperMount(<Sticky {...positions} context={contextEl} onStick={onStick} />)

      scrollAfterTrigger()
      expect(onStick).toHaveBeenCalledTimes(2)
      expect(onStick).toHaveBeenCalledWith(expect.any(Object), expect.objectContaining(positions))
      onStick.resetHistory()

      scrollToTop()
      expect(onStick).not.toHaveBeenCalled()
    })
  })

  describe('onTop', () => {
    it('is called with (e, data) when is on top', () => {
      const onTop = jest.fn()
      mockContextEl()
      mockPositions({ bottomOffset: 10, height: 50 })
      wrapperMount(<Sticky {...positions} context={contextEl} onTop={onTop} />)

      scrollAfterContext()
      expect(onTop).not.toHaveBeenCalled()

      scrollToTop()
      expect(onTop).toHaveBeenCalledTimes(1)
      expect(onTop).toHaveBeenCalledWith(expect.any(Object), expect.objectContaining(positions))
    })
  })

  describe('onUnstick', () => {
    it('is called with (e, data) when unstick', () => {
      const onUnstick = jest.fn()
      mockContextEl()
      mockPositions({ bottomOffset: 10, height: 50 })
      wrapperMount(<Sticky {...positions} context={contextEl} onUnstick={onUnstick} />)

      scrollAfterTrigger()
      expect(onUnstick).not.toHaveBeenCalled()

      scrollToTop()
      expect(onUnstick).toHaveBeenCalledTimes(1)
      expect(onUnstick).toHaveBeenCalledWith(expect.any(Object), expect.objectContaining(positions))
    })
  })

  describe('pushing', () => {
    it('should push component back', () => {
      mockContextEl()
      mockPositions({ bottomOffset: 30, height: 100, offset: 10 })
      wrapperMount(<Sticky {...positions} context={contextEl} pushing />)

      scrollAfterTrigger()

      // Scroll back: component should still stick to context bottom
      scrollToContextBottom()
      wrapper.setProps({ context: mockContextEl({ bottom: 0 }) })
      domEvent.scroll(window)

      _.forEach(['ui', 'sticky', 'bound', 'bottom'], className =>
        expect(wrapper.childAt(0).childAt(1).hasClass(className)).toBe(true),
      )
      expect(wrapper.childAt(0).childAt(1)).have.style('bottom', '0px')

      // Scroll a bit before the top: component should stick to screen bottom
      scrollAfterTrigger()

      expect(wrapper.childAt(0).childAt(1)).have.style('bottom', '30px')
      _.forEach(['ui', 'sticky', 'fixed', 'bottom'], className =>
        expect(wrapper.childAt(0).childAt(1)).have.className(className),
      )
      expect(wrapper.childAt(0).childAt(1)).not.have.style('top')
    })

    it('should stop pushing when reaching top', () => {
      mockContextEl()
      mockPositions({ bottomOffset: 10, height: 100, offset: 10 })
      wrapperMount(<Sticky {...positions} context={contextEl} pushing />)

      scrollAfterTrigger()
      scrollToContextBottom()
      scrollToTop()
      scrollAfterTrigger()

      // Component should stick again to the top
      _.forEach(['ui', 'sticky', 'fixed', 'top'], className =>
        expect(wrapper.childAt(0).childAt(1)).have.className(className),
      )
      expect(wrapper.childAt(0).childAt(1)).have.style('top', '10px')
    })

    it('should return true if oversized', () => {
      mockContextEl()
      mockPositions({ bottomOffset: 15, height: 100000, offset: 20 })
      wrapperMount(<Sticky {...positions} context={contextEl} pushing />)

      scrollAfterTrigger()
      expect(wrapper.instance().isOversized()).toBe(true)
    })
  })

  describe('scrollContext', () => {
    it('should use window as default', () => {
      const onStick = jest.fn()
      const instance = mount(<Sticky onStick={onStick} />).instance()

      instance.triggerRef = mockRect({ top: -1 })
      domEvent.scroll(window)

      expect(onStick).toHaveBeenCalled()
    })

    it('should set a scroll context', () => {
      const div = document.createElement('div')
      const onStick = jest.fn()
      const instance = mount(<Sticky scrollContext={div} onStick={onStick} />).instance()

      instance.triggerRef = mockRect({ top: -1 })

      domEvent.scroll(window)
      expect(onStick).not.toHaveBeenCalled()

      domEvent.scroll(div)
      expect(onStick).toHaveBeenCalled()
    })

    it('should not call onStick when context is null', () => {
      const onStick = jest.fn()
      const instance = mount(<Sticky scrollContext={null} onStick={onStick} />).instance()

      instance.triggerRef = mockRect({ top: -1 })

      domEvent.scroll(document)
      expect(onStick).not.toHaveBeenCalled()
    })

    it('should call onStick when scrollContext changes', () => {
      const div = document.createElement('div')
      const onStick = jest.fn()
      const renderedComponent = mount(<Sticky scrollContext={null} onStick={onStick} />)
      const instance = renderedComponent.instance()

      instance.triggerRef = mockRect({ top: -1 })
      renderedComponent.setProps({ scrollContext: div })

      domEvent.scroll(div)
      expect(onStick).toHaveBeenCalled()
    })

    it('should not call onStick when scrollContext changes and component is unmounted', () => {
      const div = document.createElement('div')
      const onStick = jest.fn()
      const renderedComponent = mount(<Sticky scrollContext={null} onStick={onStick} />)
      const instance = renderedComponent.instance()

      instance.triggerRef = mockRect({ top: -1 })
      renderedComponent.setProps({ scrollContext: div })
      renderedComponent.unmount()

      domEvent.scroll(div)
      expect(onStick).not.toHaveBeenCalled()

      domEvent.scroll(document)
      expect(onStick).not.toHaveBeenCalled()
    })
  })

  describe('update', () => {
    it('is called on scroll', () => {
      const instance = mount(<Sticky />).instance()
      const update = jest.fn(instance, 'update')

      domEvent.scroll(window)
      expect(update).toHaveBeenCalledTimes(1)
    })

    it('is called on resize', () => {
      const instance = mount(<Sticky />).instance()
      const update = jest.fn(instance, 'update')

      domEvent.resize(window)
      expect(update).toHaveBeenCalledTimes(1)
    })

    it('is not called after unmount', (done) => {
      window.requestAnimationFrame.restore()
      sandbox.stub(window, 'requestAnimationFrame').callsFake(fn => setTimeout(fn, 0))
      sandbox.stub(window, 'cancelAnimationFrame').callsFake(id => clearTimeout(id))

      const instance = wrapperMount(<Sticky />).instance()
      const update = jest.fn(instance, 'update')

      domEvent.resize(window)
      wrapper.unmount()
      window.requestAnimationFrame(() => {
        expect(update).not.toHaveBeenCalled()
        done()
      })
    })
  })
})
