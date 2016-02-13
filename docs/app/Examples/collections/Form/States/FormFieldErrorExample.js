import React, { Component } from 'react'
import { Form, Input } from 'stardust'

export default class FormFieldErrorExample extends Component {
  render() {
    return (
      <Form>
        <Form.Field label='First name' className='error'>
          <Input placeholder='First name' />
        </Form.Field>
      </Form>
    )
  }
}
