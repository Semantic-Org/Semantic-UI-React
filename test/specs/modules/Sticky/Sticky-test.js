import React from 'react'

import Sticky from 'src/modules/Sticky/Sticky'
import * as common from 'test/specs/commonTests'
import { domEvent, sandbox } from 'test/utils'

let contextEl
let wrapper
let positions

const mockRect = (values = {}) => ({ getBoundingClientRect: () => values })

const mockContextEl = (values = {}) => (contextEl = mockRect(values))

const mockPositions = ({ bottomOffset = 5, offset = 5, height = 5 } = {}) => (positions = {
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
  wrapper.setProps({ content: mockRect({ bottom: height + offset + bottomOffset }) })

  domEvent.scroll(window)
}

// Scroll until the trigger is not visible
const scrollAfterTrigger = () => {
  const { bottomOffset, height, offset } = positions
  const instance = wrapper.instance()

  instance.triggerRef = mockRect({ top: offset - 1 })
  instance.stickyRef = mockRect({ height })
  wrapper.setProps({ context: mockRect({ bottom: (window.innerHeight - bottomOffset) + 1 }) })

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
  common.rendersChildren(Sticky)

  let requestAnimationFrame

  before(() => {
    requestAnimationFrame = window.requestAnimationFrame
    window.requestAnimationFrame = fn => fn()
  })

  after(() => {
    window.requestAnimationFrame = requestAnimationFrame
  })

  beforeEach(() => {
    wrapper = undefined
  })

  afterEach(() => {
    if (wrapper && wrapper.unmount) wrapper.unmount()
  })

  describe('children', () => {
    it('should create two divs', () => {
      const children = shallow(<Sticky />).children()

      children.should.have.length(2)
      children.everyWhere(child => child.should.have.tagName('div'))
    })
  })

  describe('active', () => {
    it('should handle update on mount when active', () => {
      const onTop = sandbox.spy()
      mount(<Sticky context={mockContextEl()} onTop={onTop} />)

      onTop.should.have.been.calledOnce()
    })

    it('should not handle update on mount when not active', () => {
      const onTop = sandbox.spy()
      mount(<Sticky active={false} context={mockContextEl()} onTop={onTop} />)

      onTop.should.have.not.been.called()
    })

    it('fires event when changes to true', () => {
      const onTop = sandbox.spy()
      wrapperMount(<Sticky active={false} context={mockContextEl()} onTop={onTop} />)
      onTop.should.have.not.been.called()

      wrapper.setProps({ active: true })
      onTop.should.have.been.calledOnce()
    })

    it('omits event and removes styles when changes to false', () => {
      const onStick = sandbox.spy()
      const onUnStick = sandbox.spy()
      mockContextEl()
      mockPositions({ bottomOffset: 10, height: 50 })
      wrapperMount(<Sticky {...positions} context={contextEl} onStick={onStick} onUnstick={onUnStick} />)

      wrapper.childAt(1).should.have.style('position', 'fixed')
      onStick.should.have.been.calledOnce()
      onStick.should.have.been.calledWithMatch(undefined, positions)

      wrapper.setProps({ active: false })
      scrollToTop()
      wrapper.childAt(1).should.have.not.style('position')
      onUnStick.should.not.have.been.called()
    })
  })

  describe('behaviour', () => {
    it('should stick to top of screen', () => {
      mockContextEl()
      mockPositions({ bottomOffset: 12, height: 200, offset: 12 })
      wrapperMount(<Sticky {...positions} context={contextEl} />)

      // Scroll after trigger
      scrollAfterTrigger()
      wrapper.childAt(1).should.have.style('position', 'fixed')
      wrapper.childAt(1).should.have.style('top', '12px')
    })

    it('should stick to bottom of context', () => {
      mockContextEl()
      mockPositions({ bottomOffset: 10, height: 100, offset: 20 })
      wrapperMount(<Sticky {...positions} context={contextEl} />)

      scrollAfterContext()
      wrapper.childAt(1).should.have.style('position', 'fixed')
      wrapper.childAt(1).should.have.style('top', '-101px')
    })
  })
  describe('onBottom', () => {
    it('is called with (e, data) when is on bottom', () => {
      const onBottom = sandbox.spy()
      mockContextEl()
      mockPositions()
      wrapperMount(<Sticky {...positions} context={contextEl} onBottom={onBottom} />)

      scrollAfterContext()
      onBottom.should.have.been.calledOnce()
      onBottom.should.have.been.calledWithMatch({}, positions)
      onBottom.reset()

      scrollToTop()
      onBottom.should.not.have.been.called()
    })
  })

  describe('onStick', () => {
    it('is called with (e, data) when stick', () => {
      const onStick = sandbox.spy()
      mockContextEl()
      mockPositions({ bottomOffset: 10, height: 50 })
      wrapperMount(<Sticky {...positions} context={contextEl} onStick={onStick} />)

      scrollAfterTrigger()
      onStick.should.have.been.calledTwice()
      onStick.should.have.been.calledWithMatch({}, positions)
      onStick.reset()

      scrollToTop()
      onStick.should.not.have.been.called()
    })
  })

  describe('onTop', () => {
    it('is called with (e, data) when is on top', () => {
      const onTop = sandbox.spy()
      mockContextEl()
      mockPositions({ bottomOffset: 10, height: 50 })
      wrapperMount(<Sticky {...positions} context={contextEl} onTop={onTop} />)

      scrollAfterContext()
      onTop.should.not.have.been.called()

      scrollToTop()
      onTop.should.have.been.calledOnce()
      onTop.should.have.been.calledWithMatch({}, positions)
    })
  })

  describe('onUnstick', () => {
    it('is called with (e, data) when unstick', () => {
      const onUnstick = sandbox.spy()
      mockContextEl()
      mockPositions({ bottomOffset: 10, height: 50 })
      wrapperMount(<Sticky {...positions} context={contextEl} onUnstick={onUnstick} />)

      scrollAfterTrigger()
      onUnstick.should.not.have.been.called()

      scrollToTop()
      onUnstick.should.have.been.calledOnce()
      onUnstick.should.have.been.calledWithMatch({}, positions)
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

      wrapper.childAt(1).should.have.style('position', 'fixed')
      wrapper.childAt(1).should.have.style('top', '-100px')

      // Scroll a bit before the top: component should stick to screen bottom
      scrollAfterTrigger()

      wrapper.childAt(1).should.have.style('bottom', '30px')
      wrapper.childAt(1).should.have.style('position', 'fixed')
      wrapper.childAt(1).should.not.have.style('top')
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
      wrapper.childAt(1).should.have.style('position', 'fixed')
      wrapper.childAt(1).should.have.style('top', '10px')
    })

    it('should return true if oversized', () => {
      mockContextEl()
      mockPositions({ bottomOffset: 15, height: 100000, offset: 20 })
      wrapperMount(<Sticky {...positions} context={contextEl} pushing />)

      scrollAfterTrigger()
      wrapper.instance().isOversized().should.be.equal(true)
    })
  })

  describe('scrollContext', () => {
    it('should use window as default', () => {
      const onStick = sandbox.spy()
      const instance = mount(<Sticky onStick={onStick} />).instance()

      instance.triggerRef = mockRect({ top: -1 })
      domEvent.scroll(window)

      onStick.should.have.been.called()
    })

    it('should set a scroll context', () => {
      const div = document.createElement('div')
      const onStick = sandbox.spy()
      const instance = mount(<Sticky scrollContext={div} onStick={onStick} />).instance()

      instance.triggerRef = mockRect({ top: -1 })

      domEvent.scroll(window)
      onStick.should.not.have.been.called()

      domEvent.scroll(div)
      onStick.should.have.been.called()
    })
  })

  describe('update', () => {
    it('is called on scroll', () => {
      const instance = mount(<Sticky />).instance()
      const update = sandbox.spy(instance, 'update')

      domEvent.scroll(window)
      update.should.have.been.calledOnce()
    })

    it('is called on resize', () => {
      const instance = mount(<Sticky />).instance()
      const update = sandbox.spy(instance, 'update')

      domEvent.resize(window)
      update.should.have.been.calledOnce()
    })
  })
})
