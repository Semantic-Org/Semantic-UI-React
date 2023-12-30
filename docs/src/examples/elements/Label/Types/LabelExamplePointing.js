import React from 'react'
import { FormField, Divider, Form, Label } from 'semantic-ui-react'

const LabelExamplePointing = () => (
  <Form>
    <FormField>
      <input type='text' placeholder='First name' />
      <Label pointing>Please enter a value</Label>
    </FormField>
    <Divider />

    <FormField>
      <Label pointing='below'>Please enter a value</Label>
      <input type='text' placeholder='Last Name' />
    </FormField>
    <Divider />

    <FormField inline>
      <input type='text' placeholder='Username' />
      <Label pointing='left'>That name is taken!</Label>
    </FormField>
    <Divider />

    <FormField inline>
      <Label pointing='right'>Your password must be 6 characters or more</Label>
      <input type='password' placeholder='Password' />
    </FormField>
  </Form>
)

export default LabelExamplePointing
