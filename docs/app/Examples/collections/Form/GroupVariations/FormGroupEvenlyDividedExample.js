import React, { Component } from 'react'
import { Form, Input } from 'stardust'

export default class FormGroupEvenlyDividedExample extends Component {
  render() {
    return (
      <Form>
        <Form.Fields evenlyDivided>
          <Form.Field label='First name'>
            <Input placeholder='First name' />
          </Form.Field>
          <Form.Field label='Last name'>
            <Input placeholder='Last name' />
          </Form.Field>
        </Form.Fields>
      </Form>
    )
  }
}
