import React from 'react'
import Sticky from 'src/modules/Sticky/Sticky'
import StickyContext from 'src/modules/Sticky/StickyContext'
import * as common from 'test/specs/commonTests'

describe('Sticky', () => {
  common.isConformant(Sticky)
  common.rendersChildren(Sticky)
  common.hasSubComponents(Sticky, [StickyContext])

  it('should create two divs', () => {
    mount(<Sticky />).html().should.be.equal('<div><div></div><div></div></div>')
  })

  it('should stick to top of screen', () => {
    const offset = 12
    const wrapper = mount(<Sticky offset={offset} />)
    const instance = wrapper.instance()

    // Scroll after trigger
    instance.refs.trigger = { getBoundingClientRect: () => ({ top: offset - 1 }) }
    instance.contextEl = { getBoundingClientRect: () => ({ bottom: 1000 }) }
    window.dispatchEvent(new Event('scroll'))
    wrapper.childAt(1).props().style.should.have.property('position', 'fixed')
    wrapper.childAt(1).props().style.should.have.property('top', offset)
  })

  it('should stick to bottom of context', () => {
    const offset = 20
    const height = 100
    const wrapper = mount(<Sticky bottomOffset={offset} />)
    const instance = wrapper.instance()

    // Scroll after trigger
    instance.refs.trigger = { getBoundingClientRect: () => ({ top: -1 }) }
    instance.contextEl = { getBoundingClientRect: () => ({ bottom: height + offset }) }
    instance.refs.sticky = { getBoundingClientRect: () => ({ height }) }
    window.dispatchEvent(new Event('scroll'))

    // Scroll back
    instance.contextEl = { getBoundingClientRect: () => ({ bottom: -100 }) }
    window.dispatchEvent(new Event('scroll'))
    wrapper.childAt(1).props().style.should.have.property('position', 'fixed')
    wrapper.childAt(1).props().style.should.have.property('top', -100 - height)
  })

  it('should push component back', () => {
    const offset = 10
    const height = 100
    const wrapper = mount(<Sticky bottomOffset={offset} pushing />)
    const instance = wrapper.instance()

    // Scroll to bottom
    instance.refs.trigger = { getBoundingClientRect: () => ({ top: -100 }) }
    instance.refs.sticky = { getBoundingClientRect: () => ({ height }) }
    instance.contextEl = { getBoundingClientRect: () => ({ bottom: -1 }) }
    window.dispatchEvent(new Event('scroll'))

    // Scroll back: component should still stick to context bottom
    instance.refs.sticky = {
      getBoundingClientRect: () => ({ height, bottom: 100, top: 100 }),
    }
    window.dispatchEvent(new Event('scroll'))
    wrapper.childAt(1).props().style.should.have.property('position', 'fixed')
    wrapper.childAt(1).props().style.should.have.property('top', -1 - height)

    // Scroll more: component should stick to screen bottom
    instance.contextEl = {
      getBoundingClientRect: () => ({ height, bottom: window.innerHeight - offset + 1 }),
    }
    window.dispatchEvent(new Event('scroll'))
    wrapper.childAt(1).props().style.should.have.property('position', 'fixed')
    wrapper.childAt(1).props().style.should.have.property('top', null)
    wrapper.childAt(1).props().style.should.have.property('bottom', offset)
  })

  it('should stop pushing when reaching top', () => {
    const offset = 10
    const height = 100
    const wrapper = mount(<Sticky bottomOffset={offset} pushing />)
    const instance = wrapper.instance()

    // Scroll to bottom
    instance.refs.trigger = { getBoundingClientRect: () => ({ top: -100 }) }
    instance.refs.sticky = { getBoundingClientRect: () => ({ height }) }
    instance.contextEl = { getBoundingClientRect: () => ({ bottom: -1 }) }
    window.dispatchEvent(new Event('scroll'))

    // Scroll to top
    instance.refs.trigger = { getBoundingClientRect: () => ({ top: 10 }) }
    instance.refs.sticky = { getBoundingClientRect: () => ({ top: 10 }) }

    // Scroll down: component should remain there
    instance.contextEl = {
      getBoundingClientRect: () => ({ height, bottom: window.innerHeight }),
    }
    window.dispatchEvent(new Event('scroll'))
    wrapper.childAt(1).props().style.should.not.have.property('position')
  })
})
