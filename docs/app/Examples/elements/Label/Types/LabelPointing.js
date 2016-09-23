import React from 'react'
import { Divider, Form, Label } from 'stardust'

const LabelPointing = () => (
  <Form>
    <Form.Field>
      <input type='text' placeholder='First name' />
      <Label pointing>Please enter a value</Label>
    </Form.Field>
    <Divider />

    <Form.Field>
      <Label pointing below>Please enter a value</Label>
      <input type='text' placeholder='Last Name' />
    </Form.Field>
    <Divider />

    <Form.Field inline>
      <input type='text' placeholder='Username' />
      <Label pointing='left'>That name is taken!</Label>
    </Form.Field>
    <Divider />

    <Form.Field inline>
      <input type='password' placeholder='Password' />
      <Label pointing='right'>Your password must be 6 characters or more</Label>
    </Form.Field>
  </Form>
)

export default LabelPointing
