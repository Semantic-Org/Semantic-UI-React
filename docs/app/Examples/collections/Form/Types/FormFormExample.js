import React, { Component } from 'react'
import { Button, Checkbox, Form, Input } from 'stardust'

export default class FormFormExample extends Component {
  render() {
    return (
      <Form>
        <Form.Field label='First Name'>
          <Input placeholder='First Name' />
        </Form.Field>
        <Form.Field label='Last Name'>
          <Input placeholder='Last Name' />
        </Form.Field>
        <Form.Field label='First Name'>
          <Checkbox label='I agree to the Terms and Conditions' />
        </Form.Field>
        <Button type='submit'>Submit</Button>
      </Form>
    )
  }
}
