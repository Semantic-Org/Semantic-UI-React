import faker from 'faker'
import React from 'react'

import Radio from 'src/addons/Radio/Radio'
import Label from 'src/elements/Label/Label'
import FormField from 'src/collections/Form/FormField'
import { SUI } from 'src/lib'
import Button from 'src/elements/Button/Button'
import Checkbox from 'src/modules/Checkbox/Checkbox'
import * as common from 'test/specs/commonTests'

describe('FormField', () => {
  common.isConformant(FormField)
  common.rendersChildren(FormField)

  // No Control
  common.forwardsRef(FormField)
  common.forwardsRef(FormField, {
    tagName: 'div',
    requiredProps: {
      children: <input />,
    },
  })

  // HTML Checkbox/Radio Control
  common.forwardsRef(FormField, {
    tagName: 'input',
    requiredProps: { control: 'input', type: 'radio' },
  })
  common.forwardsRef(FormField, {
    tagName: 'input',
    requiredProps: { control: 'input', type: 'checkbox' },
  })

  // Checkbox/Radio Control
  common.forwardsRef(FormField, {
    tagName: 'input',
    requiredProps: { control: Checkbox },
  })
  common.forwardsRef(FormField, {
    tagName: 'input',
    requiredProps: { control: Radio },
  })

  // Other Control
  common.forwardsRef(FormField, {
    tagName: 'input',
    requiredProps: { control: 'input' },
  })

  common.implementsHTMLLabelProp(FormField, { autoGenerateKey: false })
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
        shallow(<FormField control={control} />).should.have.descendants(control)
      })
    })
  })

  describe('error', () => {
    common.implementsLabelProp(FormField, {
      autoGenerateKey: false,
      propKey: 'error',
      requiredProps: { label: faker.lorem.word() },
      shorthandDefaultProps: {
        prompt: true,
        pointing: 'above',
        role: 'alert',
        'aria-atomic': true,
      },
    })
    common.implementsLabelProp(FormField, {
      autoGenerateKey: false,
      propKey: 'error',
      requiredProps: { control: 'radio' },
      shorthandDefaultProps: {
        prompt: true,
        pointing: 'above',
        role: 'alert',
        'aria-atomic': true,
      },
    })
    common.implementsLabelProp(FormField, {
      autoGenerateKey: false,
      propKey: 'error',
      requiredProps: { control: Checkbox },
      shorthandDefaultProps: {
        prompt: true,
        pointing: 'above',
        role: 'alert',
        'aria-atomic': true,
      },
    })
    common.implementsLabelProp(FormField, {
      autoGenerateKey: false,
      propKey: 'error',
      requiredProps: { control: 'input' },
      shorthandDefaultProps: {
        prompt: true,
        pointing: 'above',
        role: 'alert',
        'aria-atomic': true,
      },
    })

    it('positioned in DOM according to passed "pointing" prop', () => {
      ;[
        { pointing: 'below', inDom: 'before' },
        { pointing: 'right', inDom: 'before' },
        { pointing: 'left', inDom: 'after' },
        { pointing: 'above', inDom: 'after' },
      ].forEach(({ pointing, inDom }) => {
        const wrapper = shallow(
          <FormField
            control='input'
            error={{ content: faker.lorem.word(), pointing }}
            type='text'
          />,
        )

        wrapper.childAt(inDom === 'before' ? 0 : 1).should.have.type(Label)
        wrapper.childAt(inDom === 'before' ? 1 : 0).should.have.type('input')
      })
    })
  })

  describe('label', () => {
    it('wraps html checkbox inputs', () => {
      const text = faker.hacker.phrase()
      const label = shallow(<FormField control='input' label={text} type='checkbox' />).find(
        'label',
      )

      label.childAt(0).should.have.tagName('input')
      label.should.contain.text(text)
    })

    it('wraps html radio inputs', () => {
      const text = faker.hacker.phrase()
      const label = shallow(<FormField control='input' label={text} type='radio' />).find('label')

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

  describe('content', () => {
    it('is not set by default', () => {
      const wrapper = shallow(<FormField control={Button} />)
      const button = wrapper.find('Button')

      wrapper.should.have.exactly(1).descendants('Button')
      button.should.not.have.prop('content')
    })
    it('is passed to the control', () => {
      const wrapper = shallow(<FormField control={Button} content='Click Me' />)
      const button = wrapper.find('Button')

      wrapper.should.have.exactly(1).descendants('Button')
      button.should.have.prop('content', 'Click Me')
    })
  })

  describe('id', () => {
    it('is set when content is provided', () => {
      const wrapper = mount(<FormField content='content' id='testId' />)
      const fieldId = wrapper.getDOMNode().getAttribute('id')
      expect(fieldId).to.equal('testId')
    })
    it('is set when have child elements', () => {
      const wrapper = mount(
        <FormField id='testId'>
          <input />
        </FormField>,
      )
      const fieldId = wrapper.getDOMNode().getAttribute('id')
      expect(fieldId).to.equal('testId')
    })
  })

  describe('aria-invalid', () => {
    it('is not set by default', () => {
      shallow(<FormField control='input' />)
        .find('input')
        .should.not.have.prop('aria-invalid')
    })
    it('is not set when error is false', () => {
      shallow(<FormField control='input' error={false} />)
        .find('input')
        .should.not.have.prop('aria-invalid')
    })
    it('is set when error is true', () => {
      shallow(<FormField control='input' error />)
        .find('input')
        .should.have.prop('aria-invalid', true)
    })
    it('is is set when error object is provided', () => {
      shallow(
        <FormField
          control='input'
          error={{
            content: 'Error message',
            pointing: 'left',
          }}
        />,
      )
        .find('input')
        .should.have.prop('aria-invalid', true)
    })
  })
})
