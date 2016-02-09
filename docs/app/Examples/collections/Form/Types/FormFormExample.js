import React, { Component } from 'react'
import { Button, Checkbox, Field, Form, Input } from 'stardust'

export default class FormFormExample extends Component {
  render() {
    return (
      <Form>
        <Field label='First Name'>
          <Input placeholder='First Name' />
        </Field>
        <Field label='Last Name'>
          <Input placeholder='Last Name' />
        </Field>
        <Field label='First Name'>
          <Checkbox label='I agree to the Terms and Conditions' />
        </Field>
        <Button type='submit'>Submit</Button>
      </Form>
    )
  }
}
