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

  common.isConformant(TextArea)
  common.forwardsRef(TextArea, { tagName: 'textarea' })

  describe('focus', () => {
    it('can be set via a ref', () => {
      const ref = React.createRef()

      wrapperMount(<TextArea ref={ref} />)
      const element = document.querySelector('textarea')

      ref.current.focus()
      document.activeElement.should.equal(element)
    })
  })

  describe('onChange', () => {
    it('is called with (e, data) on change', () => {
      const onChange = sandbox.spy()
      const e = { target: { value: 'name' } }
      const props = { 'data-foo': 'bar', onChange }

      wrapperShallow(<TextArea {...props} />)
      wrapper.find('textarea').simulate('change', e)

      onChange.should.have.been.calledOnce()
      onChange.should.have.been.calledWithMatch(e, { ...props, value: e.target.value })
    })
  })

  describe('onInput', () => {
    it('is called with (e, data) on input', () => {
      const onInput = sandbox.spy()
      const e = { target: { value: 'name' } }
      const props = { 'data-foo': 'bar', onInput }

      wrapperShallow(<TextArea {...props} />)
      wrapper.find('textarea').simulate('input', e)

      onInput.should.have.been.calledOnce()
      onInput.should.have.been.calledWithMatch(e, { ...props, value: e.target.value })
    })
  })

  describe('rows', () => {
    it('has default value', () => {
      shallow(<TextArea />, { autoNesting: true }).should.have.prop('rows', 3)
    })

    it('sets prop', () => {
      shallow(<TextArea rows={1} />, { autoNesting: true }).should.have.prop('rows', 1)
    })
  })
})
