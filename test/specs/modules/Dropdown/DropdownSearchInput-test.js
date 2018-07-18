import faker from 'faker'
import React from 'react'

import * as common from 'test/specs/commonTests'
import DropdownSearchInput from 'src/modules/Dropdown/DropdownSearchInput'

describe('DropdownSearchInput', () => {
  common.hasValidTypings(DropdownSearchInput)

  describe('aria', () => {
    it('should have aria-autocomplete', () => {
      expect(shallow(<DropdownSearchInput />).prop('aria-autocomplete')).toBe('list')
    })
  })

  describe('autoComplete', () => {
    it('should have autoComplete by default', () => {
      expect(shallow(<DropdownSearchInput />).prop('autoComplete')).toBe('off')
    })

    it('should pass a defined value', () => {
      expect(shallow(<DropdownSearchInput autoComplete='on' />).prop('autoComplete')).toBe('on')
    })
  })

  describe('onChange', () => {
    it('is called with (e, data) on change', () => {
      const onChange = jest.fn()
      const e = { target: { value: 'value' } }

      shallow(<DropdownSearchInput onChange={onChange} />)
        .find('input')
        .simulate('change', e)

      expect(onChange).toHaveBeenCalledTimes(1)
      expect(onChange).toHaveBeenCalledWith(e, { value: e.target.value })
    })
  })

  describe('inputRef', () => {
    it('maintains ref on input', () => {
      const inputRef = jest.fn()
      const mountNode = document.createElement('div')
      document.body.appendChild(mountNode)

      const wrapper = mount(<DropdownSearchInput inputRef={inputRef} />, { attachTo: mountNode })
      const input = document.querySelector('input')

      expect(inputRef).toHaveBeenCalledTimes(1)
      expect(inputRef).toHaveBeenCalledWith(input)

      wrapper.detach()
      document.body.removeChild(mountNode)
    })
  })

  describe('tabIndex', () => {
    it('is not set by default', () => {
      expect(shallow(<DropdownSearchInput />).prop('tabIndex')).toBeUndefined()
    })

    it('can be set explicitly', () => {
      expect(shallow(<DropdownSearchInput tabIndex={123} />).prop('tabIndex')).toBe(123)
    })
  })

  describe('type', () => {
    it('should have text by default', () => {
      expect(shallow(<DropdownSearchInput />).prop('type')).toBe('text')
    })

    it('can be set explicitly', () => {
      const type = faker.random.word()

      expect(shallow(<DropdownSearchInput type={type} />).prop('type')).toBe(type)
    })
  })

  describe('value', () => {
    it('is not set by default', () => {
      expect(shallow(<DropdownSearchInput />).prop('value')).toBeUndefined()
    })

    it('can be set explicitly', () => {
      const value = faker.random.word()

      expect(shallow(<DropdownSearchInput value={value} />).prop('value')).toBe(value)
    })
  })
})
