import faker from 'faker'
import React from 'react'

import Radio from 'src/addons/Radio/Radio'
import FormField from 'src/collections/Form/FormField'
import { SUI } from 'src/lib'
import Button from 'src/elements/Button/Button'
import Checkbox from 'src/modules/Checkbox/Checkbox'
import * as common from 'test/specs/commonTests'

describe('FormField', () => {
  common.isConformant(FormField)
  common.rendersChildren(FormField)

  common.implementsHTMLLabelProp(FormField)
  common.implementsWidthProp(FormField, SUI.WIDTHS, {
    canEqual: false,
    propKey: 'width',
  })

  common.propKeyOnlyToClassName(FormField, 'disabled')
  common.propKeyOnlyToClassName(FormField, 'error')
  common.propKeyOnlyToClassName(FormField, 'inline')
  common.propKeyOnlyToClassName(FormField, 'required', {
    requiredProps: { label: '' },
  })

  describe('control', () => {
    it('adds an HTML element child of the same type', () => {
      const controls = ['button', 'input', 'select', 'textarea']

      controls.forEach((control) => {
        expect(shallow(<FormField control={control} />).find(control)).toHaveLength(1)
      })
    })
  })

  describe('label', () => {
    it('wraps html checkbox inputs', () => {
      const text = faker.hacker.phrase()
      const label = shallow(<FormField control='input' label={text} type='checkbox' />).find(
        'label',
      )

      expect(label.childAt(0).type()).toBe('input')
      expect(label.text()).toContain(text)
    })

    it('wraps html radio inputs', () => {
      const text = faker.hacker.phrase()
      const label = shallow(<FormField control='input' label={text} type='radio' />).find('label')

      expect(label.childAt(0).type()).toBe('input')
      expect(label.text()).toContain(text)
    })

    it('is passed to Checkbox controls', () => {
      const text = faker.hacker.phrase()

      expect(
        shallow(<FormField control={Checkbox} label={text} />)
          .find('Checkbox')
          .prop('label'),
      ).toBe(text)
    })

    it('is passed to Radio controls', () => {
      const text = faker.hacker.phrase()

      expect(
        shallow(<FormField control={Radio} label={text} />)
          .find('Radio')
          .prop('label'),
      ).toBe(text)
    })

    it('is sibling to text inputs', () => {
      const text = faker.hacker.phrase()
      const wrapper = shallow(<FormField control='input' label={text} type='text' />)

      expect(wrapper.childAt(0).type()).toBe('label')
      expect(wrapper.childAt(0).text()).toBe(text)
      expect(wrapper.childAt(1).type()).toBe('input')
    })
  })

  describe('disabled', () => {
    it('is not set by default', () => {
      const wrapper = shallow(<FormField control='input' />)
      const input = wrapper.find('input')

      expect(wrapper.find('input')).toHaveLength(1)
      expect(input.prop('disabled')).toBeUndefined()
    })
    it('is passed to the control', () => {
      const wrapper = shallow(<FormField control='input' disabled />)
      const input = wrapper.find('input')

      expect(wrapper.find('input')).toHaveLength(1)
      expect(input.prop('disabled')).toBe(true)
    })
  })

  describe('required', () => {
    it('is not set by default', () => {
      const wrapper = shallow(<FormField control='input' />)
      const input = wrapper.find('input')

      expect(wrapper.find('input')).toHaveLength(1)
      expect(input.prop('required')).toBeUndefined()
    })
    it('is passed to the control', () => {
      const wrapper = shallow(<FormField control='input' required />)
      const input = wrapper.find('input')

      expect(wrapper.find('input')).toHaveLength(1)
      expect(input.prop('required')).toBe(true)
    })
  })

  describe('content', () => {
    it('is not set by default', () => {
      const wrapper = shallow(<FormField control={Button} />)
      const button = wrapper.find('Button')

      expect(wrapper.find('Button')).toHaveLength(1)
      expect(button.prop('content')).toBeUndefined()
    })
    it('is passed to the control', () => {
      const wrapper = shallow(<FormField control={Button} content='Click Me' />)
      const button = wrapper.find('Button')

      expect(wrapper.find('Button')).toHaveLength(1)
      expect(button.prop('content')).toBe('Click Me')
    })
  })
})
