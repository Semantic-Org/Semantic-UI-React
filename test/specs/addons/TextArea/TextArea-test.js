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

  describe('autoHeight', () => {
    // simplify styles to make height assertions easier
    const style = { padding: 0, fontSize: '10px', lineHeight: 1, border: 'none' }

    const assertHeight = (height) => {
      const element = document.querySelector('textarea')

      if (!height) {
        element.style.should.have.property('resize', '')
        element.style.should.have.property('height', '')
        return
      }

      element.style.should.have.property('resize', 'none')

      // CI renders textareas with an extra pixel
      // assert height with a margin of error of one pixel
      const parsedHeight = parseInt(height, 10)
      parseInt(element.style.height, 10).should.be.within(parsedHeight - 1, parsedHeight + 1)
    }

    it('sets styles when true', () => {
      wrapperMount(<TextArea autoHeight style={style} />)
      assertHeight('30px') // 3 lines
    })

    it('does not set styles when not set', () => {
      wrapperMount(<TextArea style={style} />)
      assertHeight('') // no height
    })

    it('depends on minHeight value of style', () => {
      wrapperMount(<TextArea autoHeight style={{ ...style, minHeight: '50px' }} />)
      assertHeight('50px')
    })

    it('depends on rows value', () => {
      wrapperMount(<TextArea autoHeight style={style} rows={1} />)
      assertHeight('10px') // 1 line
    })

    it('sets styles when there is a multiline value', () => {
      wrapperMount(
        <TextArea
          autoHeight
          style={style}
          value={'line1\nline2\nline3\nline4'}
        />,
      )
      assertHeight('40px') // 4 lines
    })

    it('updates the height on change', () => {
      wrapperMount(<TextArea autoHeight style={style} />)

      // initial height
      assertHeight('30px') // 3 lines

      // update the value and fire a change event
      wrapper.setProps({ value: 'line1\nline2\nline3\nline4' })
      assertHeight('40px') // 4 lines
    })

    it('adds styles when toggled to true', () => {
      wrapperMount(<TextArea style={style} />)
      wrapper.setProps({ autoHeight: true, rows: 1 })

      assertHeight('10px') // 1 line
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
      document.activeElement.should.equal(element)
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

  describe('onInput', () => {
    it('is called with (e, data) on input', () => {
      const spy = sandbox.spy()
      const e = { target: { value: 'name' } }
      const props = { 'data-foo': 'bar', onInput: spy }

      wrapperShallow(<TextArea {...props} />)
      wrapper.find('textarea').simulate('input', e)

      spy.should.have.been.calledOnce()
      spy.should.have.been.calledWithMatch(e, { ...props, value: e.target.value })
    })
  })

  describe('rows', () => {
    it('has default value', () => {
      shallow(<TextArea />)
        .should.have.prop('rows', 3)
    })

    it('sets prop', () => {
      shallow(<TextArea rows={1} />)
        .should.have.prop('rows', 1)
    })
  })

  describe('style', () => {
    it('applies defined style', () => {
      const style = { marginTop: '1em', top: 0 }

      wrapperShallow(<TextArea style={style} />)
      wrapper.should.have.style('margin-top', '1em')
      wrapper.should.have.style('top', '0')
    })
  })
})
