import React, { Component } from 'react'
import { Form, Checkbox } from 'stardust'

export default class CheckboxRadioGroupExample extends Component {
  render() {
    return (
      <Form>
        <Form.Field>
          <Checkbox className='radio' label='Choose this' name='radioGroup' />
        </Form.Field>
        <Form.Field>
          <Checkbox className='radio' label='Or that' name='radioGroup' />
        </Form.Field>
      </Form>
    )
  }
}
