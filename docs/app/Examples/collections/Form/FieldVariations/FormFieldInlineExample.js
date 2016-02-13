import React, { Component } from 'react'
import { Form, Input } from 'stardust'

export default class FormFieldInlineExample extends Component {
  render() {
    return (
      <Form>
        <Form.Field label='First name' className='inline'>
          <Input placeholder='First name' />
        </Form.Field>
      </Form>
    )
  }
}
