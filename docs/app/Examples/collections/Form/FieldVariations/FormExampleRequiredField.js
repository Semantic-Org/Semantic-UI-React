import React from 'react'
import { Form, Input } from 'semantic-ui-react'

const FormExampleRequiredField = () => (
  <Form>
    <Form.Field required>
      <label>Last name</label>
      <Input placeholder='Full name' />
    </Form.Field>
    <Form.Checkbox
      inline
      label='I agree to the terms and conditions'
      required
    />
  </Form>
)

export default FormExampleRequiredField
