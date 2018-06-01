import React from 'react'
import { Form, Input } from 'semantic-ui-react'

const FormExampleRequiredField = () => (
  <Form>
    <Form.Field required>
      <label>Last name</label>
      <Input placeholder='Full name' />
    </Form.Field>
  </Form>
)

export default FormExampleRequiredField
