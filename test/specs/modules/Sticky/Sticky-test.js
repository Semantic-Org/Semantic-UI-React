import React from 'react'
import Sticky from 'src/modules/Sticky/Sticky'
import { sandbox } from 'test/utils'
import * as common from 'test/specs/commonTests'

// Scroll to the top of the screen
const scrollToTop = (wrapper, contextEl, { bottomOffset, offset, height }) => {
  const instance = wrapper.instance()
  instance.triggerRef = { getBoundingClientRect: () => ({ top: offset }) }
  instance.stickyRef = { getBoundingClientRect: () => ({ height, top: offset }) }
  contextEl.getBoundingClientRect = () => ({ bottom: height + offset + bottomOffset })
  window.dispatchEvent(new Event('scroll'))
}

// Scroll until the trigger is not visible
const scrollAfterTrigger = (wrapper, contextEl, { bottomOffset, offset, height }) => {
  const instance = wrapper.instance()
  instance.triggerRef = { getBoundingClientRect: () => ({ top: offset - 1 }) }
  instance.stickyRef = { getBoundingClientRect: () => ({ height }) }
  contextEl.getBoundingClientRect = () => ({ bottom: window.innerHeight - bottomOffset + 1 })
  window.dispatchEvent(new Event('scroll'))
}

// Scroll until the context bottom is not visible
const scrollAfterContext = (wrapper, contextEl, { offset, height }) => {
  const instance = wrapper.instance()
  instance.triggerRef = { getBoundingClientRect: () => ({ top: offset - 1 }) }
  instance.stickyRef = { getBoundingClientRect: () => ({ height }) }
  contextEl.getBoundingClientRect = () => ({ bottom: -1 })
  window.dispatchEvent(new Event('scroll'))
}

// Scroll to the last part of the context
const scrollToContextBottom = (wrapper, contextEl, { offset, height }) => {
  const instance = wrapper.instance()
  instance.triggerRef = { getBoundingClientRect: () => ({ top: offset - 1 }) }
  instance.stickyRef = { getBoundingClientRect: () => ({ height }) }
  contextEl.getBoundingClientRect = () => ({ bottom: height + 1 })
  window.dispatchEvent(new Event('scroll'))
}

describe('Sticky', () => {
  common.isConformant(Sticky)
  common.rendersChildren(Sticky)

  let requestAnimationFrame

  before(() => {
    window.requestAnimationFrame = fn => fn()
    requestAnimationFrame = window.requestAnimationFrame
  })

  after(() => {
    window.requestAnimationFrame = requestAnimationFrame
  })

  it('should create two divs', () => {
    const children = shallow(<Sticky />).children()

    children.should.have.length(2)
    children.everyWhere(child => child.should.have.tagName('div'))
  })

  it('should stick to top of screen', () => {
    const offset = 12
    const bottomOffset = 12
    const height = 200
    const contextEl = { getBoundingClientRect: () => ({}) }
    const wrapper = mount(
      <Sticky context={contextEl} offset={offset} bottomOffset={bottomOffset} />
    )

    // Scroll after trigger
    scrollAfterTrigger(wrapper, contextEl, { bottomOffset, offset, height })
    wrapper.childAt(1).props().style.should.have.property('position', 'fixed')
    wrapper.childAt(1).props().style.should.have.property('top', offset)
  })

  it('should stick to bottom of context', () => {
    const offset = 20
    const bottomOffset = 10
    const height = 100
    const contextEl = { getBoundingClientRect: () => ({}) }
    const wrapper = mount(
      <Sticky context={contextEl} offset={offset} bottomOffset={bottomOffset} />
    )

    scrollAfterContext(wrapper, contextEl, { bottomOffset, offset, height })

    wrapper.childAt(1).props().style.should.have.property('position', 'fixed')
    wrapper.childAt(1).props().style.should.have.property('top', -1 - height)
  })

  it('should push component back', () => {
    const offset = 10
    const bottomOffset = 30
    const height = 100
    const contextEl = { getBoundingClientRect: () => ({}) }
    const wrapper = mount(
      <Sticky context={contextEl} offset={offset} bottomOffset={bottomOffset} pushing />
    )

    scrollAfterTrigger(wrapper, contextEl, { bottomOffset, offset, height })

    // Scroll back: component should still stick to context bottom
    scrollToContextBottom(wrapper, contextEl, { offset, height })
    contextEl.getBoundingClientRect = () => ({ bottom: 0 })
    window.dispatchEvent(new Event('scroll'))
    wrapper.childAt(1).props().style.should.have.property('position', 'fixed')
    wrapper.childAt(1).props().style.should.have.property('top', -100)

    // Scroll a bit before the top: component should stick to screen bottom
    scrollAfterTrigger(wrapper, contextEl, { bottomOffset, offset, height })
    wrapper.childAt(1).props().style.should.have.property('position', 'fixed')
    wrapper.childAt(1).props().style.should.have.property('top', null)
    wrapper.childAt(1).props().style.should.have.property('bottom', bottomOffset)
  })

  it('should stop pushing when reaching top', () => {
    const offset = 10
    const bottomOffset = 10
    const height = 100
    const contextEl = { getBoundingClientRect: () => ({}) }
    const wrapper = mount(
      <Sticky context={contextEl} bottomOffset={bottomOffset} offset={offset} pushing />
    )

    scrollAfterTrigger(wrapper, contextEl, { bottomOffset, offset, height })
    scrollToContextBottom(wrapper, contextEl, { offset, height })
    scrollToTop(wrapper, contextEl, { height, bottomOffset, offset })
    scrollAfterTrigger(wrapper, contextEl, { bottomOffset, offset, height })
    // Component should stick again to the top
    wrapper.childAt(1).props().style.should.have.property('position', 'fixed')
    wrapper.childAt(1).props().style.should.have.property('top', offset)
  })

  it('should return true if oversized', () => {
    const offset = 20
    const bottomOffset = 15
    const height = 100000
    const contextEl = { getBoundingClientRect: () => ({}) }
    const wrapper = mount(
      <Sticky context={contextEl} bottomOffset={bottomOffset} offset={offset} pushing />
    )
    scrollAfterTrigger(wrapper, contextEl, { bottomOffset, offset, height })
    wrapper.instance().isOversized().should.be.equal(true)
  })

  it('should fire onStick callback', () => {
    const offset = 5
    const bottomOffset = 10
    const height = 50
    const contextEl = { getBoundingClientRect: () => ({}) }
    const onStick = sandbox.spy()
    const wrapper = mount(
      <Sticky context={contextEl} offset={offset} bottomOffset={bottomOffset} onStick={onStick} />
    )

    scrollAfterTrigger(wrapper, contextEl, { bottomOffset, offset, height })
    onStick.should.have.been.calledWithMatch({}, { bottomOffset, offset })
    onStick.reset()

    scrollToTop(wrapper, contextEl, { bottomOffset, offset, height })
    onStick.should.not.have.been.called()
  })

  it('should fire onUnstick callback', () => {
    const offset = 5
    const bottomOffset = 10
    const height = 50
    const contextEl = { getBoundingClientRect: () => ({}) }
    const onUnstick = sandbox.spy()
    const wrapper = mount(
      <Sticky context={contextEl} offset={offset} bottomOffset={bottomOffset} onUnstick={onUnstick} />
    )

    scrollAfterTrigger(wrapper, contextEl, { bottomOffset, offset, height })
    onUnstick.should.not.have.been.called()

    scrollToTop(wrapper, contextEl, { bottomOffset, offset, height })
    onUnstick.should.have.been.calledWithMatch({}, { bottomOffset, offset })
  })

  it('should fire onTop callback', () => {
    const offset = 5
    const bottomOffset = 10
    const height = 50
    const contextEl = { getBoundingClientRect: () => ({}) }
    const onTop = sandbox.spy()
    const wrapper = mount(
      <Sticky context={contextEl} offset={offset} bottomOffset={bottomOffset} onTop={onTop} />
    )

    scrollAfterContext(wrapper, contextEl, { bottomOffset, offset, height })
    onTop.should.not.have.been.called()

    scrollToTop(wrapper, contextEl, { bottomOffset, offset, height })
    onTop.should.have.been.calledWithMatch({}, { bottomOffset, offset })
  })

  it('should fire onBottom callback', () => {
    const offset = 5
    const bottomOffset = 5
    const height = 5
    const contextEl = { getBoundingClientRect: () => ({}) }
    const onBottom = sandbox.spy()
    const wrapper = mount(
      <Sticky context={contextEl} offset={offset} bottomOffset={bottomOffset} onBottom={onBottom} />
    )

    scrollAfterContext(wrapper, contextEl, { bottomOffset, offset, height })
    onBottom.should.have.been.calledWithMatch({}, { bottomOffset, offset })
    onBottom.reset()

    scrollToTop(wrapper, contextEl, { bottomOffset, offset, height })
    onBottom.should.not.have.been.called()
  })
})
