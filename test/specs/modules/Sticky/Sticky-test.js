import _ from 'lodash'
import React from 'react'

import Sticky from 'src/modules/Sticky/Sticky'
import * as common from 'test/specs/commonTests'
import { domEvent, sandbox } from 'test/utils'

let contextEl
let wrapper
let positions

const mockContextEl = (values = {}) => (contextEl = { getBoundingClientRect: () => values })

const mockTriggerEl = (values = {}) => {
  const wrapperEl = wrapper.getDOMNode()
  const triggerEl = wrapperEl.childNodes[0]

  // try to remove any existing spy in case it exists
  try {
    triggerEl.getBoundingClientRect.restore()
    // eslint-disable-next-line no-empty
  } catch (e) {}
  sandbox.stub(triggerEl, 'getBoundingClientRect').callsFake(() => values)
}

const mockStickyEl = (values = {}) => {
  const wrapperEl = wrapper.getDOMNode()
  const stickyEl = wrapperEl.childNodes[1]

  // try to remove any existing spy in case it exists
  try {
    stickyEl.getBoundingClientRect.restore()
    // eslint-disable-next-line no-empty
  } catch (e) {}
  sandbox.stub(stickyEl, 'getBoundingClientRect').callsFake(() => values)
}

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

  wrapper.setProps({
    context: { getBoundingClientRect: () => ({ bottom: height + offset + bottomOffset }) },
  })

  mockTriggerEl({ top: offset })
  mockStickyEl({ height, top: offset })

  domEvent.scroll(window)
}

// Scroll until the trigger is not visible
const scrollAfterTrigger = () => {
  const { bottomOffset, height, offset } = positions

  wrapper.setProps({
    context: { getBoundingClientRect: () => ({ bottom: window.innerHeight - bottomOffset + 1 }) },
  })

  mockTriggerEl({ top: offset - 1 })
  mockStickyEl({ height })

  domEvent.scroll(window)
}

// Scroll until the context bottom is not visible
const scrollAfterContext = () => {
  const { height, offset } = positions

  wrapper.setProps({ context: { getBoundingClientRect: () => ({ bottom: -1 }) } })

  mockTriggerEl({ top: offset - 1 })
  mockStickyEl({ height })

  domEvent.scroll(window)
}

// Scroll to the last part of the context
const scrollToContextBottom = () => {
  const { height, offset } = positions

  wrapper.setProps({ context: { getBoundingClientRect: () => ({ bottom: height + 1 }) } })

  mockTriggerEl({ top: offset - 1 })
  mockStickyEl({ height })

  domEvent.scroll(window)
}

describe('Sticky', () => {
  common.isConformant(Sticky)
  common.forwardsRef(Sticky, { requiredProps: { active: false } })
  common.rendersChildren(Sticky, {
    rendersContent: false,
  })

  beforeEach(() => {
    sandbox.stub(window, 'requestAnimationFrame').callsArg(0)
    wrapper = undefined
  })

  afterEach(() => {
    if (wrapper && wrapper.unmount) {
      try {
        wrapper.unmount()
        // eslint-disable-next-line no-empty
      } catch (e) {}
    }
  })

  describe('children', () => {
    it('should create two divs', () => {
      const children = shallow(<Sticky />).children()

      children.should.have.length(2)
      children.everyWhere((child) => child.should.have.tagName('div'))
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
      wrapperMount(<Sticky active={false} context={mockContextEl()} onTop={onTop} />)

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

      wrapperMount(
        <Sticky {...positions} context={contextEl} onStick={onStick} onUnstick={onUnStick} />,
      )

      _.forEach(['ui', 'sticky', 'fixed', 'top'], (className) =>
        wrapper.childAt(0).childAt(1).should.have.className(className),
      )

      onStick.should.have.been.calledOnce()
      onStick.should.have.been.calledWithMatch(undefined, positions)

      wrapper.setProps({ active: false })
      scrollToTop()
      wrapper.childAt(0).childAt(1).should.have.not.className('fixed')
      onUnStick.should.not.have.been.called()
    })
  })

  describe('context', () => {
    it('should handle React refs', () => {
      const contextRef = { current: mockContextEl() }
      const onTop = sandbox.spy()
      mount(<Sticky context={contextRef} onTop={onTop} />)

      onTop.should.have.been.calledOnce()
    })
  })

  describe('behaviour', () => {
    it('should stick to top of screen', () => {
      mockContextEl()
      mockPositions({ bottomOffset: 12, height: 200, offset: 12 })

      wrapperMount(<Sticky {...positions} context={contextEl} />)

      // Scroll after trigger
      scrollAfterTrigger()

      _.forEach(['ui', 'sticky', 'fixed', 'top'], (className) =>
        wrapper.childAt(0).childAt(1).should.have.className(className),
      )

      wrapper.childAt(0).childAt(1).should.have.style('top', '12px')
    })

    it('should stick to bottom of context', () => {
      mockContextEl()
      mockPositions({ bottomOffset: 10, height: 100, offset: 20 })
      wrapperMount(<Sticky {...positions} context={contextEl} />)

      scrollAfterContext()
      _.forEach(['ui', 'sticky', 'bound', 'bottom'], (className) =>
        wrapper.childAt(0).childAt(1).should.have.className(className),
      )
      wrapper.childAt(0).childAt(1).should.have.style('bottom', '0px')
    })

    it('should preserve sticky element height', () => {
      mockContextEl()
      mockPositions({ bottomOffset: 0, height: 100, offset: 0 })
      wrapperMount(<Sticky {...positions} context={contextEl} />)

      // Scroll after trigger
      scrollAfterTrigger()

      wrapper.childAt(0).childAt(0).should.have.style('height', '100px')
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
      onBottom.resetHistory()

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
      onStick.resetHistory()

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

      _.forEach(['ui', 'sticky', 'bound', 'bottom'], (className) =>
        wrapper.childAt(0).childAt(1).should.have.className(className),
      )
      wrapper.childAt(0).childAt(1).should.have.style('bottom', '0px')

      // Scroll a bit before the top: component should stick to screen bottom
      scrollAfterTrigger()

      wrapper.childAt(0).childAt(1).should.have.style('bottom', '30px')

      _.forEach(['ui', 'sticky', 'fixed', 'bottom'], (className) =>
        wrapper.childAt(0).childAt(1).should.have.className(className),
      )

      wrapper.childAt(0).childAt(1).should.not.have.style('top')
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
      _.forEach(['ui', 'sticky', 'fixed', 'top'], (className) =>
        wrapper.childAt(0).childAt(1).should.have.className(className),
      )

      wrapper.childAt(0).childAt(1).should.have.style('top', '10px')
    })
  })

  describe('scrollContext', () => {
    it('should use window as default', () => {
      const onStick = sandbox.spy()

      wrapperMount(<Sticky onStick={onStick} />)
      mockTriggerEl({ top: -1 })

      domEvent.scroll(window)
      onStick.should.have.been.called()
    })

    it('should set a scroll context', () => {
      const div = document.createElement('div')
      const onStick = sandbox.spy()

      wrapperMount(<Sticky scrollContext={div} onStick={onStick} />)
      mockTriggerEl({ top: -1 })

      domEvent.scroll(window)
      onStick.should.not.have.been.called()

      domEvent.scroll(div)
      onStick.should.have.been.called()
    })

    it('should set a scroll context via React refs', () => {
      const scrollContextRef = { current: document.createElement('div') }
      const onStick = sandbox.spy()

      wrapperMount(<Sticky scrollContext={scrollContextRef} onStick={onStick} />)
      mockTriggerEl({ top: -1 })

      domEvent.scroll(window)
      onStick.should.not.have.been.called()

      domEvent.scroll(scrollContextRef.current)
      onStick.should.have.been.called()
    })

    it('should not call onStick when context is null', () => {
      const onStick = sandbox.spy()

      wrapperMount(<Sticky scrollContext={null} onStick={onStick} />)
      mockTriggerEl({ top: -1 })

      domEvent.scroll(document)
      onStick.should.not.have.been.called()
    })

    it('should call onStick when scrollContext changes', () => {
      const div = document.createElement('div')
      const onStick = sandbox.spy()
      wrapperMount(<Sticky scrollContext={null} onStick={onStick} />)

      wrapper.setProps({ scrollContext: div })
      mockTriggerEl({ top: -1 })

      domEvent.scroll(div)
      onStick.should.have.been.called()
    })
  })

  describe('styleElement', () => {
    it('is passed to macthing element', () => {
      wrapperMount(<Sticky styleElement={{ zIndex: 10 }} />)
      const element = wrapper.childAt(0).childAt(1)

      element.should.have.style('z-index', '10')
    })
  })
})
