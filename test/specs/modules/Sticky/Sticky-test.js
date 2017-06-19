import React from 'react'
import Sticky from 'src/modules/Sticky/Sticky'
import { sandbox } from 'test/utils'
import * as common from 'test/specs/commonTests'

// Scroll to the top of the screen
const scrollToTop = (wrapper, { bottomOffset, offset, height }) => {
  const instance = wrapper.instance()
  instance.refs.trigger = { getBoundingClientRect: () => ({ top: offset }) }
  instance.refs.sticky = { getBoundingClientRect: () => ({ height, top: offset }) }
  instance.contextEl = { getBoundingClientRect: () => ({ bottom: height + offset + bottomOffset }) }
  window.dispatchEvent(new Event('scroll'))
}

// Scroll until the trigger is not visible
const scrollAfterTrigger = (wrapper, { bottomOffset, offset, height }) => {
  const instance = wrapper.instance()
  instance.refs.trigger = { getBoundingClientRect: () => ({ top: offset - 1 }) }
  instance.refs.sticky = { getBoundingClientRect: () => ({ height }) }
  instance.contextEl = { getBoundingClientRect: () => ({ bottom: window.innerHeight - bottomOffset + 1 }) }
  window.dispatchEvent(new Event('scroll'))
}

// Scroll until the context bottom is not visible
const scrollAfterContext = (wrapper, { offset, height }) => {
  const instance = wrapper.instance()
  instance.refs.trigger = { getBoundingClientRect: () => ({ top: offset - 1 }) }
  instance.refs.sticky = { getBoundingClientRect: () => ({ height }) }
  instance.contextEl = { getBoundingClientRect: () => ({ bottom: -1 }) }
  window.dispatchEvent(new Event('scroll'))
}

// Scroll to the last part of the context
const scrollToContextBottom = (wrapper, { offset, height }) => {
  const instance = wrapper.instance()
  instance.refs.trigger = { getBoundingClientRect: () => ({ top: offset - 1 }) }
  instance.refs.sticky = { getBoundingClientRect: () => ({ height }) }
  instance.contextEl = { getBoundingClientRect: () => ({ bottom: height + 1 }) }
  window.dispatchEvent(new Event('scroll'))
}

describe('Sticky', () => {
  common.isConformant(Sticky)
  common.rendersChildren(Sticky)

  it('should create two divs', () => {
    mount(<Sticky />).html().should.be.equal('<div><div></div><div></div></div>')
  })

  it('should stick to top of screen', () => {
    const offset = 12
    const bottomOffset = 12
    const height = 200
    const wrapper = mount(<Sticky offset={offset} bottomOffset={bottomOffset} />)

    // Scroll after trigger
    scrollAfterTrigger(wrapper, { bottomOffset, offset, height })
    wrapper.childAt(1).props().style.should.have.property('position', 'fixed')
    wrapper.childAt(1).props().style.should.have.property('top', offset)
  })

  it('should stick to bottom of context', () => {
    const offset = 20
    const bottomOffset = 10
    const height = 100
    const wrapper = mount(<Sticky offset={offset} bottomOffset={bottomOffset} />)

    scrollAfterContext(wrapper, { bottomOffset, offset, height })

    wrapper.childAt(1).props().style.should.have.property('position', 'fixed')
    wrapper.childAt(1).props().style.should.have.property('top', -1 - height)
  })

  it('should push component back', () => {
    const offset = 10
    const bottomOffset = 30
    const height = 100
    const wrapper = mount(<Sticky offset={offset} bottomOffset={bottomOffset} pushing />)

    scrollAfterTrigger(wrapper, { bottomOffset, offset, height })

    // Scroll back: component should still stick to context bottom
    scrollToContextBottom(wrapper, { offset, height })
    wrapper.childAt(1).props().style.should.have.property('position', 'fixed')
    wrapper.childAt(1).props().style.should.have.property('top', 1)

    // Scroll a bit before the top: component should stick to screen bottom
    scrollAfterTrigger(wrapper, { bottomOffset, offset, height })
    wrapper.childAt(1).props().style.should.have.property('position', 'fixed')
    wrapper.childAt(1).props().style.should.have.property('top', null)
    wrapper.childAt(1).props().style.should.have.property('bottom', bottomOffset)
  })

  it('should stop pushing when reaching top', () => {
    const offset = 10
    const bottomOffset = 10
    const height = 100
    const wrapper = mount(<Sticky bottomOffset={bottomOffset} offset={offset} pushing />)

    scrollAfterTrigger(wrapper, { bottomOffset, offset, height })
    scrollToContextBottom(wrapper, { offset, height })
    scrollToTop(wrapper, { height, bottomOffset, offset })
    scrollAfterTrigger(wrapper, { bottomOffset, offset, height })
    // Component should stick again to the top
    wrapper.childAt(1).props().style.should.have.property('position', 'fixed')
    wrapper.childAt(1).props().style.should.have.property('top', offset)
  })

  it('should fire onStick callback', () => {
    const offset = 5
    const bottomOffset = 10
    const height = 50
    const fn = sandbox.spy()
    const wrapper = mount(<Sticky offset={offset} bottomOffset={bottomOffset} onStick={fn} />)

    scrollAfterTrigger(wrapper, { bottomOffset, offset, height })
    fn.should.have.been.calledOnce()

    scrollToTop(wrapper, { bottomOffset, offset, height })
    fn.should.have.been.calledOnce()
  })

  it('should fire onUnstick callback', () => {
    const offset = 5
    const bottomOffset = 10
    const height = 50
    const fn = sandbox.spy()
    const wrapper = mount(<Sticky offset={offset} bottomOffset={bottomOffset} onUnstick={fn} />)

    scrollAfterTrigger(wrapper, { bottomOffset, offset, height })
    fn.should.not.have.been.called()

    scrollToTop(wrapper, { bottomOffset, offset, height })
    fn.should.have.been.calledOnce()
  })

  it('should fire onTop callback', () => {
    const offset = 5
    const bottomOffset = 10
    const height = 50
    const fn = sandbox.spy()
    const wrapper = mount(<Sticky offset={offset} bottomOffset={bottomOffset} onTop={fn} />)

    scrollAfterContext(wrapper, { bottomOffset, offset, height })
    fn.should.not.have.been.called()

    scrollToTop(wrapper, { bottomOffset, offset, height })
    fn.should.have.been.calledOnce()
  })

  it('should fire onBottom callback', () => {
    const offset = 5
    const bottomOffset = 5
    const height = 5
    const fn = sandbox.spy()
    const wrapper = mount(<Sticky offset={offset} bottomOffset={bottomOffset} onBottom={fn} />)

    scrollAfterContext(wrapper, { bottomOffset, offset, height })
    fn.should.have.been.calledOnce()

    scrollToTop(wrapper, { bottomOffset, offset, height })
    fn.should.have.been.calledOnce()
  })
})
