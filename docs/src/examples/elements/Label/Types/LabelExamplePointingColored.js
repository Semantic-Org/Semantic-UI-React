import React from 'react'
import { FormField, Divider, Form, Label } from 'semantic-ui-react'

const LabelExamplePointing = () => (
  <Form>
    <FormField>
      <input type='text' placeholder='First name' />
      <Label basic color='red' pointing>
        Please enter a value
      </Label>
    </FormField>
    <Divider />

    <FormField>
      <Label basic color='red' pointing='below'>
        Please enter a value
      </Label>
      <input type='text' placeholder='Last Name' />
    </FormField>
    <Divider />

    <FormField inline>
      <input type='text' placeholder='Username' />
      <Label basic color='red' pointing='left'>
        That name is taken!
      </Label>
    </FormField>
    <Divider />

    <FormField inline>
      <Label basic color='red' pointing='right'>
        Your password must be 6 characters or more
      </Label>
      <input type='password' placeholder='Password' />
    </FormField>
  </Form>
)

export default LabelExamplePointing
