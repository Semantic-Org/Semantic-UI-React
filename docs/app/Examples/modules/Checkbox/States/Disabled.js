import React, { Component } from 'react'
import { Form, Checkbox, Field } from 'stardust'

export default class CheckboxDisabledExample extends Component {
  render() {
    return (
      <Form>
        <Form.Field>
          <Checkbox className='disabled' label='Disabled' />
        </Form.Field>
        <Form.Field>
          <Checkbox className='toggle' disabled label='Disabled' />
        </Form.Field>
      </Form>
    )
  }
}
