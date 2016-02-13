import React, { Component } from 'react'
import { Form, Input } from 'stardust'

export default class FormFieldExample extends Component {
  render() {
    return (
      <Form>
        <Form.Field label='User Input'>
          <Input placeholder='User Input' />
        </Form.Field>
      </Form>
    )
  }
}
