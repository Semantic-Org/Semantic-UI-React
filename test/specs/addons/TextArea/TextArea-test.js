import React from 'react'

import TextArea from 'src/addons/TextArea/TextArea'
import { sandbox } from 'test/utils'
import * as common from 'test/specs/commonTests'

// ----------------------------------------
// Wrapper
// ----------------------------------------
// we need to unmount the dropdown after every test to ensure all event listeners are cleaned up
// wrap the render methods to update a global wrapper that is unmounted after each test
let attachTo
let wrapper
const wrapperMount = (element, opts) => {
  attachTo = document.createElement('div')
  document.body.appendChild(attachTo)

  wrapper = mount(element, { ...opts, attachTo })
  return wrapper
}
const wrapperShallow = (...args) => (wrapper = shallow(...args))

describe('TextArea', () => {
  beforeEach(() => {
    attachTo = undefined
    wrapper = undefined
  })

  afterEach(() => {
    if (wrapper) {
      if (wrapper.unmount) wrapper.unmount()
      if (wrapper.detach) wrapper.detach()
    }
    if (attachTo) document.body.removeChild(attachTo)
  })

  common.isConformant(TextArea, {
    eventTargets: {
      onChange: 'textarea',
    },
  })

  describe('focus', () => {
    it('can be set via a ref', () => {
      wrapperMount(<TextArea />)
      const element = document.querySelector('textarea')

      wrapper.instance().focus()
      document.activeElement.should.equal(element)
    })
  })

  describe('autoHeight', () => {
    // simplify styles to make height assertions easier
    const style = { padding: 0, fontSize: '10px', lineHeight: 1, border: 'none' }

    const assertHeight = (height) => {
      const element = document.querySelector('textarea')

      if (!height) {
        element.should.not.have.property('rows', 1)
        element.style.should.have.property('minHeight', '')
        element.style.should.have.property('resize', '')
        element.style.should.have.property('height', '')
        return
      }

      element.should.have.property('rows', 1)
      element.style.should.have.property('minHeight', '0px')
      element.style.should.have.property('resize', 'none')

      // CI renders textareas with an extra pixel
      // assert height with a margin of error of one pixel
      const parsedHeight = parseInt(height, 10)
      parseInt(element.style.height, 10).should.be.within(parsedHeight - 1, parsedHeight + 1)
    }

    it('sets styles when true', () => {
      wrapperMount(<TextArea style={style} autoHeight />)

      assertHeight('10px') // 1 line
    })
    it('sets styles when there is a multiline value', () => {
      wrapperMount(<TextArea style={style} autoHeight value={'line1\nline2\nline3'} />)

      assertHeight('30px') // 3 lines
    })
    it('does not set styles when not set', () => {
      wrapperMount(<TextArea style={style} />)

      assertHeight('') // no height
    })
    it('updates the height on change', () => {
      wrapperMount(<TextArea style={style} autoHeight />)

      // initial height
      const element = document.querySelector('textarea')
      element.style.height.should.equal('10px')

      // update the value and fire a change event
      element.value = 'line1\nline2\nline3'
      wrapper.simulate('change')

      assertHeight('30px') // 3 lines
    })
    it('adds styles when toggled to true', () => {
      wrapperMount(<TextArea style={style} />)

      wrapper.setProps({ autoHeight: true })

      assertHeight('10px') // 1 line
    })
    it('removes styles when toggled to false', () => {
      wrapperMount(<TextArea style={style} autoHeight />)

      wrapper.setProps({ autoHeight: false })

      assertHeight('') // no height
    })
  })

  describe('onChange', () => {
    it('is called with (e, data) on change', () => {
      const spy = sandbox.spy()
      const e = { target: { value: 'name' } }
      const props = { 'data-foo': 'bar', onChange: spy }

      wrapperShallow(<TextArea {...props} />)

      wrapper.find('textarea').simulate('change', e)

      spy.should.have.been.calledOnce()
      spy.should.have.been.calledWithMatch(e, { ...props, value: e.target.value })
    })
  })
})
