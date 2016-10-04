import React from 'react'
import { findDOMNode } from 'react-dom'

import Form from 'src/collections/Form/Form'
import FormButton from 'src/collections/Form/FormButton'
import FormCheckbox from 'src/collections/Form/FormCheckbox'
import FormDropdown from 'src/collections/Form/FormDropdown'
import FormField from 'src/collections/Form/FormField'
import FormGroup from 'src/collections/Form/FormGroup'
import FormInput from 'src/collections/Form/FormInput'
import FormRadio from 'src/collections/Form/FormRadio'
import FormSelect from 'src/collections/Form/FormSelect'
import FormTextArea from 'src/collections/Form/FormTextArea'
import * as common from 'test/specs/commonTests'
import { consoleUtil, sandbox } from 'test/utils'

describe('Form', () => {
  common.isConformant(Form)
  common.hasUIClassName(Form)
  common.hasSubComponents(Form, [
    FormButton,
    FormCheckbox,
    FormDropdown,
    FormField,
    FormTextArea,
    FormGroup,
    FormInput,
    FormRadio,
    FormSelect,
  ])
  common.rendersChildren(Form)
  common.implementsWidthProp(Form, { propKey: 'widths' })

  describe('serializer', () => {
    it('defaults to a function', () => {
      Form.defaultProps
        .should.have.any.keys('serializer')

      Form.defaultProps.serializer
        .should.be.a('function')
    })

    it('is called with (formNode) on submit', () => {
      const wrapper = mount(<Form serializer={sandbox.spy()} onSubmit={() => null} />)
      const formNode = findDOMNode(wrapper.instance())

      wrapper.simulate('submit')

      const serializer = wrapper.instance().props.serializer
      serializer.should.have.been.calledOnce()
      serializer.should.have.been.calledWithMatch(formNode)
    })

    it('logs an error if an input is missing a name', () => {
      consoleUtil.disableOnce()
      const spy = sandbox.spy(console, 'error')

      const wrapper = mount(
        <Form onSubmit={() => null}>
          <input type='checkbox' data-has-no-name />
        </Form>
      )
        .simulate('submit')

      const errorMessage = [
        'Encountered a form control node without a name attribute.',
        'Each node in a group should have a name.',
        'Otherwise, the node will serialize as { "undefined": <value> }.',
      ].join(' ')

      const formNode = findDOMNode(wrapper.instance())
      const badInput = findDOMNode(formNode.querySelector('[data-has-no-name]'))

      spy.should.have.been.calledOnce()
      spy.should.have.been.calledWithMatch(errorMessage, badInput)
    })

    it('logs an error if a checkbox in a group is missing a value', () => {
      consoleUtil.disableOnce()
      const spy = sandbox.spy(console, 'error')

      const wrapper = mount(
        <Form onSubmit={() => null}>
          <input type='checkbox' name='foo' value='bar' />
          <input type='checkbox' name='foo' data-has-no-value />
        </Form>
      )
        .simulate('submit')

      const errorMessage = [
        "Encountered a checkbox in a group with the default browser value 'on'.",
        'Each checkbox in a group should have a unique value.',
        "Otherwise, the checkbox value will serialize as ['on', ...].",
      ].join(' ')

      const formNode = findDOMNode(wrapper.instance())
      const badInput = findDOMNode(formNode.querySelector('[data-has-no-value]'))

      spy.should.have.been.calledOnce()
      spy.should.have.been.calledWithMatch(errorMessage, badInput, formNode)
    })

    it('logs an error if a radio is missing a value', () => {
      consoleUtil.disableOnce()
      const spy = sandbox.spy(console, 'error')

      const wrapper = mount(
        <Form onSubmit={() => null}>
          <input type='radio' name='foo' value='bar' />
          <input type='radio' name='foo' data-has-no-value />
        </Form>
      )
        .simulate('submit')

      const errorMessage = [
        "Encountered a radio with the default browser value 'on'.",
        'Each radio should have a unique value.',
        "Otherwise, the radio value will serialize as { [name]: 'on' }.",
      ].join(' ')

      const formNode = findDOMNode(wrapper.instance())
      const badInput = findDOMNode(formNode.querySelector('[data-has-no-value]'))

      spy.should.have.been.calledOnce()
      spy.should.have.been.calledWithMatch(errorMessage, badInput, formNode)
    })
  })

  describe('onSubmit', () => {
    let spy
    const spyFormSubmit = (children) => {
      mount(<Form onSubmit={spy}>{children}</Form>).simulate('submit')
      return spy
    }

    beforeEach(() => {
      spy = sandbox.spy()
    })

    it('is called with (event, serializedForm) on submit', () => {
      spyFormSubmit()

      spy.should.have.been.calledOnce()
      spy.should.have.been.calledWithMatch({}, {})
    })

    describe('serializes', () => {
      it('an empty object by default', () => {
        spyFormSubmit()
          .firstCall.args[1]
          .should.be.deep.equal({})
      })

      //
      // text input
      //
      it('text inputs as { name: value }', () => {
        spyFormSubmit(<input type='text' name='foo' defaultValue='bar' />)
          .should.have.been.calledWithMatch({}, { foo: 'bar' })

        spyFormSubmit(<input type='text' name='foo' />)
          .should.have.been.calledWithMatch({}, { foo: '' })
      })

      //
      // checkboxes
      //
      it('single checkboxes without a value as { name: checked }', () => {
        spyFormSubmit(<input type='checkbox' name='foo' defaultChecked />)
          .should.have.been.calledWithMatch({}, { foo: true })

        spyFormSubmit(<input type='checkbox' name='foo' />)
          .should.have.been.calledWithMatch({}, { foo: false })
      })

      it('single checkboxes with a value as { name: (value|false) }', () => {
        spyFormSubmit(<input type='checkbox' name='foo' value='bar' defaultChecked />)
          .should.have.been.calledWithMatch({}, { foo: 'bar' })

        spyFormSubmit(<input type='checkbox' name='foo' value='bar' />)
          .should.have.been.calledWithMatch({}, { foo: false })
      })

      it('multiple checkboxes with some checked as { name: [value, ...] }', () => {
        spyFormSubmit(
          <Form.Field>
            <input type='checkbox' name='foo' value='bar' defaultChecked />
            <input type='checkbox' name='foo' value='baz' />
            <input type='checkbox' name='foo' value='qux' defaultChecked />
          </Form.Field>
        )
          .should.have.been.calledWithMatch({}, { foo: ['bar', 'qux'] })
      })

      it('multiple checkboxes with none checked as { name: [] }', () => {
        spyFormSubmit(
          <Form.Field>
            <input type='checkbox' name='foo' value='bar' />
            <input type='checkbox' name='foo' value='baz' />
            <input type='checkbox' name='foo' value='qux' />
          </Form.Field>
        )
          .should.have.been.calledWithMatch({}, { foo: [] })
      })

      //
      // radios
      //
      it('radios with one checked as { name: checked value }', () => {
        spyFormSubmit(
          <Form.Field>
            <input type='radio' name='foo' value='bar' defaultChecked />
            <input type='radio' name='foo' value='baz' />
            <input type='radio' name='foo' value='qux' />
          </Form.Field>
        )
          .should.have.been.calledWithMatch({}, { foo: 'bar' })
      })

      it('radios with none checked as { name: null }', () => {
        spyFormSubmit(
          <Form.Field>
            <input type='radio' name='foo' value='bar' />
            <input type='radio' name='foo' value='baz' />
            <input type='radio' name='foo' value='qux' />
          </Form.Field>
        )
          .should.have.been.calledWithMatch({}, { foo: null })
      })

      //
      // text areas
      //
      it('text areas as { name: value }', () => {
        spyFormSubmit(<textarea name='foo' defaultValue='bar' />)
          .should.have.been.calledWithMatch({}, { foo: 'bar' })

        spyFormSubmit(<textarea name='foo' />)
          .should.have.been.calledWithMatch({}, { foo: '' })
      })

      //
      // selects
      //
      it('single selects as { name: value }', () => {
        spyFormSubmit(
          <select name='foo' defaultValue='2'>
            <option value='1'>One</option>
            <option value='2'>Two</option>
          </select>
        )
          .should.have.been.calledWithMatch({}, { foo: '2' })

        spyFormSubmit(
          <select name='foo'>
            <option value=''>Select an option</option>
            <option value='1'>One</option>
            <option value='2'>Two</option>
          </select>
        )
          .should.have.been.calledWithMatch({}, { foo: '' })
      })

      it('multiple selects with some selected as { name: [value, ...] }', () => {
        spyFormSubmit(
          <select name='foo' defaultValue={['1', '3']} multiple>
            <option value='1'>One</option>
            <option value='2'>Two</option>
            <option value='3'>Three</option>
          </select>
        )
          .should.have.been.calledWithMatch({}, { foo: ['1', '3'] })
      })

      it('multiple selects with none selected as { name: [] }', () => {
        spyFormSubmit(
          <select name='foo' multiple>
            <option value='1'>One</option>
            <option value='2'>Two</option>
            <option value='3'>Three</option>
          </select>
        )
          .should.have.been.calledWithMatch({}, { foo: [] })
      })
    })
  })
})
