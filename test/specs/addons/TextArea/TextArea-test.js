import React from 'react'

import TextArea from 'src/addons/TextArea/TextArea'
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

  describe('autoHeight', () => {
    // simplify styles to make height assertions easier
    const style = { padding: 0, fontSize: '10px', lineHeight: 1, border: 'none' }

    const assertHeight = (height) => {
      const element = document.querySelector('textarea')

      if (!height) {
        expect(element.style).toHaveProperty('resize', '')
        expect(element.style).toHaveProperty('height', '')
        return
      }

      expect(element.style).toHaveProperty('resize', 'none')
      expect(element.style).toHaveProperty('height', height)
    }

    it('sets styles when true', () => {
      wrapperMount(<TextArea autoHeight style={style} />)
      assertHeight('auto') // 3 lines
    })

    it('does not set styles when not set', () => {
      wrapperMount(<TextArea style={style} />)
      assertHeight('') // no height
    })

    it('depends on rows value', () => {
      wrapperMount(<TextArea autoHeight style={style} rows={1} />)
      assertHeight('auto') // 1 line
    })

    it('removes styles when toggled to false', () => {
      wrapperMount(<TextArea autoHeight style={style} />)
      wrapper.setProps({ autoHeight: false })

      assertHeight('') // no height
    })
  })

  describe('focus', () => {
    it('can be set via a ref', () => {
      wrapperMount(<TextArea />)
      const element = document.querySelector('textarea')

      wrapper.instance().focus()
      expect(document.activeElement).toBe(element)
    })
  })

  describe('onChange', () => {
    it('is called with (e, data) on change', () => {
      const spy = jest.fn()
      const e = { target: { value: 'name' } }
      const props = { 'data-foo': 'bar', onChange: spy }

      wrapperShallow(<TextArea {...props} />)
      wrapper.find('textarea').simulate('change', e)

      expect(spy).toHaveBeenCalledTimes(1)
      expect(spy).toHaveBeenCalledWith(
        e,
        expect.objectContaining({ ...props, value: e.target.value }),
      )
    })
  })

  describe('onInput', () => {
    it('is called with (e, data) on input', () => {
      const spy = jest.fn()
      const e = { target: { value: 'name' } }
      const props = { 'data-foo': 'bar', onInput: spy }

      wrapperShallow(<TextArea {...props} />)
      wrapper.find('textarea').simulate('input', e)

      expect(spy).toHaveBeenCalledTimes(1)
      expect(spy).toHaveBeenCalledWith(
        e,
        expect.objectContaining({ ...props, value: e.target.value }),
      )
    })
  })

  describe('rows', () => {
    it('has default value', () => {
      expect(shallow(<TextArea />).prop('rows')).toBe(3)
    })

    it('sets prop', () => {
      expect(shallow(<TextArea rows={1} />).prop('rows')).toBe(1)
    })
  })

  describe('style', () => {
    it('applies defined style', () => {
      const style = { marginTop: '1em', top: 0 }
      wrapperMount(<TextArea style={style} />)

      const element = document.querySelector('textarea')
      expect(element.style).toHaveProperty('margin-top', '1em')
      expect(element.style).toHaveProperty('top', '0px')
    })
  })
})
