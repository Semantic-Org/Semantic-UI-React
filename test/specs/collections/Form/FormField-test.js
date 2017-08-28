import faker from 'faker'
import React from 'react'

import Radio from 'src/addons/Radio/Radio'
import FormField from 'src/collections/Form/FormField'
import { SUI } from 'src/lib'
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
        shallow(<FormField control={control} />)
          .should.have.descendants(control)
      })
    })
  })

  describe('label', () => {
    it('wraps html checkbox inputs', () => {
      const text = faker.hacker.phrase()
      const label = shallow(<FormField control='input' label={text} type='checkbox' />)
        .find('label')

      label.childAt(0).should.have.tagName('input')
      label.should.contain.text(text)
    })

    it('wraps html radio inputs', () => {
      const text = faker.hacker.phrase()
      const label = shallow(<FormField control='input' label={text} type='radio' />)
        .find('label')

      label.childAt(0).should.have.tagName('input')
      label.should.contain.text(text)
    })

    it('is passed to Checkbox controls', () => {
      const text = faker.hacker.phrase()

      shallow(<FormField control={Checkbox} label={text} />)
        .find('Checkbox')
        .should.have.prop('label', text)
    })

    it('is passed to Radio controls', () => {
      const text = faker.hacker.phrase()

      shallow(<FormField control={Radio} label={text} />)
        .find('Radio')
        .should.have.prop('label', text)
    })

    it('is sibling to text inputs', () => {
      const text = faker.hacker.phrase()
      const wrapper = shallow(<FormField control='input' label={text} type='text' />)

      wrapper.childAt(0).should.have.tagName('label')
      wrapper.childAt(0).should.contain.text(text)
      wrapper.childAt(1).should.have.tagName('input')
    })
  })

  describe('disabled', () => {
    it('is not set by default', () => {
      const wrapper = shallow(<FormField control='input' />)
      const input = wrapper.find('input')

      wrapper.should.have.exactly(1).descendants('input')
      input.should.not.have.prop('disabled')
    })
    it('is passed to the control', () => {
      const wrapper = shallow(<FormField control='input' disabled />)
      const input = wrapper.find('input')

      wrapper.should.have.exactly(1).descendants('input')
      input.should.have.prop('disabled', true)
    })
  })

  describe('required', () => {
    it('is not set by default', () => {
      const wrapper = shallow(<FormField control='input' />)
      const input = wrapper.find('input')

      wrapper.should.have.exactly(1).descendants('input')
      input.should.not.have.prop('required')
    })
    it('is passed to the control', () => {
      const wrapper = shallow(<FormField control='input' required />)
      const input = wrapper.find('input')

      wrapper.should.have.exactly(1).descendants('input')
      input.should.have.prop('required', true)
    })
  })
})
