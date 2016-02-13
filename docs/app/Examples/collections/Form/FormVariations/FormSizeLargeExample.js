import React, { Component } from 'react'
import { Button, Form, Input } from 'stardust'

export default class FormSizeLargeExample extends Component {
  render() {
    return (
      <Form className='large'>
        <Form.Fields>
          <Form.Field label='First name'>
            <Input placeholder='First name' />
          </Form.Field>
          <Form.Field label='Last name'>
            <Input placeholder='Last name' />
          </Form.Field>
        </Form.Fields>
        <Button type='submit'>Submit</Button>
      </Form>
    )
  }
}
