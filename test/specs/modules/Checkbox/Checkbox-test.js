import _ from 'lodash'
import React from 'react'

import { htmlInputAttrs } from 'src/lib'
import Checkbox from 'src/modules/Checkbox/Checkbox'
import * as common from 'test/specs/commonTests'
import { domEvent } from 'test/utils'

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

describe('Checkbox', () => {
  common.isConformant(Checkbox)
  common.hasUIClassName(Checkbox)

  common.propKeyOnlyToClassName(Checkbox, 'checked')
  common.propKeyOnlyToClassName(Checkbox, 'disabled')
  common.propKeyOnlyToClassName(Checkbox, 'readOnly', {
    className: 'read-only',
  })
  common.propKeyOnlyToClassName(Checkbox, 'slider')
  common.propKeyOnlyToClassName(Checkbox, 'toggle')

  common.implementsHTMLLabelProp(Checkbox, {
    alwaysPresent: true,
  })

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

  describe('aria', () => {
    ['aria-label', 'role'].forEach((propName) => {
      it(`passes "${propName}" to the <input>`, () => {
        expect(
          shallow(<Checkbox {...{ [propName]: 'foo' }} />)
            .find('input')
            .prop(propName),
        ).toBe('foo')
      })
    })
  })

  describe('checking', () => {
    it('can be checked and unchecked', () => {
      wrapperShallow(<Checkbox />)

      expect(wrapper.find('input').prop('checked')).toBe(false)

      wrapper.simulate('click')
      expect(wrapper.find('input').prop('checked')).toBe(true)

      wrapper.simulate('click')
      expect(wrapper.find('input').prop('checked')).toBe(false)
    })
    it('can be checked but not unchecked when radio', () => {
      wrapperShallow(<Checkbox radio />)

      expect(wrapper.find('input').prop('checked')).toBe(false)

      wrapper.simulate('click')
      expect(wrapper.find('input').prop('checked')).toBe(true)

      wrapper.simulate('click')
      expect(wrapper.find('input').prop('checked')).toBe(true)
    })
  })

  describe('defaultChecked', () => {
    it('sets the initial checked state', () => {
      expect(
        shallow(<Checkbox defaultChecked />)
          .find('input')
          .prop('checked'),
      ).toBe(true)
    })
  })

  describe('indeterminate', () => {
    it('can be indeterminate', () => {
      wrapperMount(<Checkbox indeterminate />)
      const input = document.querySelector('.ui.checkbox input')

      expect(input.indeterminate).toBe(true)

      domEvent.click(input)
      expect(input.indeterminate).toBe(true)
    })
    it('can not be indeterminate', () => {
      wrapperMount(<Checkbox indeterminate={false} />)
      const input = document.querySelector('.ui.checkbox input')

      expect(input.indeterminate).toBe(false)

      domEvent.click(input)
      expect(input.indeterminate).toBe(false)
    })
  })

  describe('defaultIndeterminate', () => {
    it('sets the initial indeterminate state', () => {
      wrapperMount(<Checkbox defaultIndeterminate />)
      const input = document.querySelector('.ui.checkbox input')

      expect(input.indeterminate).toBe(true)
    })

    it('unsets indeterminate state on any click', () => {
      wrapperMount(<Checkbox defaultIndeterminate />)
      const input = document.querySelector('.ui.checkbox input')

      expect(input.indeterminate).toBe(true)

      domEvent.click(input)
      expect(input.indeterminate).toBe(false)

      domEvent.click(input)
      expect(input.indeterminate).toBe(false)
    })
  })

  describe('disabled', () => {
    it('cannot be checked', () => {
      wrapperShallow(<Checkbox disabled />)

      wrapper.simulate('click')
      expect(wrapper.find('input').prop('checked')).toBe(false)
    })

    it('cannot be unchecked', () => {
      wrapperShallow(<Checkbox defaultChecked disabled />)

      wrapper.simulate('click')
      expect(wrapper.find('input').prop('checked')).toBe(true)
    })

    it('is applied to the underlying html input element', () => {
      expect(
        wrapperShallow(<Checkbox disabled />)
          .find('input')
          .prop('disabled'),
      ).toBe(true)

      expect(
        wrapperShallow(<Checkbox disabled={false} />)
          .find('input')
          .prop('disabled'),
      ).toBe(false)
    })
  })

  describe('id', () => {
    it('passes value to the input', () => {
      expect(
        shallow(<Checkbox id='foo' />)
          .find('input')
          .prop('id'),
      ).toBe('foo')
    })

    it('adds htmlFor prop to the label', () => {
      expect(
        shallow(<Checkbox id='foo' />)
          .find('label')
          .prop('htmlFor'),
      ).toBe('foo')
    })

    it('adds htmlFor prop to the label when it is empty', () => {
      expect(
        shallow(<Checkbox id='foo' label={null} />)
          .find('label')
          .prop('htmlFor'),
      ).toBe('foo')
    })
  })

  describe('input', () => {
    // Heads up! Input handles some of html props
    const props = _.without(htmlInputAttrs, 'defaultChecked', 'disabled')

    _.forEach(props, (propName) => {
      it(`passes "${propName}" to the input`, () => {
        expect(
          shallow(<Checkbox {...{ [propName]: 'radio' }} />)
            .find('input')
            .prop(propName),
        ).toBeDefined()
      })
    })
  })

  describe('label', () => {
    it('adds the "fitted" class when not present', () => {
      expect(shallow(<Checkbox name='firstName' />).hasClass('fitted')).toBe(true)
    })

    it('adds the "fitted" class when is null', () => {
      expect(shallow(<Checkbox name='firstName' />).hasClass('fitted')).toBe(true)
    })

    it('does not add the "fitted" class when is not nil', () => {
      expect(shallow(<Checkbox name='firstName' label='' />).hasClass('fitted')).toBe(false)

      expect(shallow(<Checkbox name='firstName' label={0} />).hasClass('fitted')).toBe(false)
    })
  })

  describe('onChange', () => {
    it('is called with (event { name, value, !checked }) on click', () => {
      const onChange = jest.fn()
      const expectProps = { name: 'foo', value: 'bar', checked: false, indeterminate: true }
      mount(<Checkbox onChange={onChange} {...expectProps} />).simulate('click')

      expect(onChange).toHaveBeenCalledTimes(1)
      expect(onChange).toHaveBeenCalledWith(
        expect.any(Object),
        expect.objectContaining({
          ...expectProps,
          checked: !expectProps.checked,
          indeterminate: false,
        }),
      )
    })
    it('is called once on input click when "id" prop is passed', () => {
      const onChange = jest.fn()
      wrapperMount(<Checkbox id='foo' onChange={onChange} />)

      domEvent.click('.ui.checkbox input')
      expect(onChange).toHaveBeenCalledTimes(1)
    })
    it('is called once on label click when "id" prop is passed', () => {
      const onChange = jest.fn()
      wrapperMount(<Checkbox id='foo' onChange={onChange} />)

      domEvent.click('.ui.checkbox label')
      expect(onChange).toHaveBeenCalledTimes(1)
    })
    it('is not called when the checkbox has the disabled prop set', () => {
      const spy = jest.fn()
      mount(<Checkbox disabled onChange={spy} />).simulate('click')
      expect(spy).not.toHaveBeenCalled()
    })
  })

  describe('onClick', () => {
    it('is called with (event { name, value, checked }) on label click', () => {
      const onChange = jest.fn()
      const expectProps = { name: 'foo', value: 'bar', checked: false, indeterminate: true }
      mount(<Checkbox onClick={onChange} {...expectProps} />).simulate('click')

      expect(onChange).toHaveBeenCalledTimes(1)
      expect(onChange).toHaveBeenCalledWith(
        expect.any(Object),
        expect.objectContaining({
          ...expectProps,
          checked: !expectProps.checked,
          indeterminate: expectProps.indeterminate,
        }),
      )
    })
    it('is called once on input click when "id" prop is passed', () => {
      const onClick = jest.fn()
      wrapperMount(<Checkbox id='foo' onClick={onClick} />)

      domEvent.click('.ui.checkbox input')
      expect(onClick).toHaveBeenCalledTimes(1)
    })
    it('is called once on label click when "id" prop is passed', () => {
      const onClick = jest.fn()
      wrapperMount(<Checkbox id='foo' onClick={onClick} />)

      domEvent.click('.ui.checkbox label')
      expect(onClick).toHaveBeenCalledTimes(1)
    })
    it('is not called when the checkbox has the disabled prop set', () => {
      const onClick = jest.fn()
      mount(<Checkbox disabled onClick={onClick} />).simulate('click')
      expect(onClick).not.toHaveBeenCalled()
    })
  })

  describe('onMouseDown', () => {
    it('is called with (event { name, value, checked }) on label mouse down', () => {
      const onMousedDown = jest.fn()
      const expectProps = { name: 'foo', value: 'bar', checked: false, indeterminate: true }
      mount(<Checkbox onMouseDown={onMousedDown} {...expectProps} />).simulate('mousedown')

      expect(onMousedDown).toHaveBeenCalledTimes(1)
      expect(onMousedDown).toHaveBeenCalledWith(
        expect.any(Object),
        expect.objectContaining({
          ...expectProps,
          checked: expectProps.checked,
          indeterminate: expectProps.indeterminate,
        }),
      )
    })
    it('prevents default event', () => {
      const preventDefault = jest.fn()
      wrapperShallow(<Checkbox />)

      wrapper.simulate('mousedown', { preventDefault })
      expect(preventDefault).toHaveBeenCalledTimes(1)
    })
    it('sets focus to container', () => {
      wrapperMount(<Checkbox />)
      const input = document.querySelector('.ui.checkbox input')

      domEvent.fire(input, 'mousedown')
      expect(document.activeElement).toBe(input)
    })
  })

  describe('readOnly', () => {
    it('cannot be checked', () => {
      wrapperShallow(<Checkbox readOnly />)

      wrapper.simulate('click')
      expect(wrapper.find('input').prop('checked')).toBe(false)
    })
    it('cannot be unchecked', () => {
      wrapperShallow(<Checkbox defaultChecked readOnly />)

      wrapper.simulate('click')
      expect(wrapper.find('input').prop('checked')).toBe(true)
    })
  })

  describe('tabIndex', () => {
    it('defaults to 0', () => {
      expect(
        shallow(<Checkbox />)
          .find('input')
          .prop('tabIndex'),
      ).toBe(0)
    })

    it('defaults to -1 when disabled', () => {
      expect(
        shallow(<Checkbox disabled />)
          .find('input')
          .prop('tabIndex'),
      ).toBe(-1)
    })

    it('can be set explicitly', () => {
      expect(
        shallow(<Checkbox tabIndex={123} />)
          .find('input')
          .prop('tabIndex'),
      ).toBe(123)
    })

    it('can be set explicitly when disabled', () => {
      expect(
        shallow(<Checkbox tabIndex={123} disabled />)
          .find('input')
          .prop('tabIndex'),
      ).toBe(123)
    })
  })

  describe('type', () => {
    it('renders an input of type checkbox when not set', () => {
      expect(
        shallow(<Checkbox />)
          .find('input')
          .prop('type'),
      ).toBe('checkbox')
    })

    it('sets the input type ', () => {
      expect(
        shallow(<Checkbox type='checkbox' />)
          .find('input')
          .prop('type'),
      ).toBe('checkbox')

      expect(
        shallow(<Checkbox type='radio' />)
          .find('input')
          .prop('type'),
      ).toBe('radio')
    })
  })
})
