import React from 'react'
import { Divider, Form, Label } from 'semantic-ui-react'

const LabelExamplePointing = () => (
  <Form>
    <Form.Field>
      <input type='text' placeholder='First name' />
      <Label color='red' pointing>
        Please enter a value
      </Label>
    </Form.Field>
    <Divider />

    <Form.Field>
      <Label color='red' pointing='below'>
        Please enter a value
      </Label>
      <input type='text' placeholder='Last Name' />
    </Form.Field>
    <Divider />

    <Form.Field inline>
      <input type='text' placeholder='Username' />
      <Label color='red' pointing='left'>
        That name is taken!
      </Label>
    </Form.Field>
    <Divider />

    <Form.Field inline>
      <Label color='red' pointing='right'>
        Your password must be 6 characters or more
      </Label>
      <input type='password' placeholder='Password' />
    </Form.Field>
  </Form>
)

export default LabelExamplePointing
