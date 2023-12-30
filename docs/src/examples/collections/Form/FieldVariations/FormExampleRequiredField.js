import React from 'react'
import { FormField, Form, Input } from 'semantic-ui-react'

const FormExampleRequiredField = () => (
  <Form>
    <FormField required>
      <label>Last name</label>
      <Input placeholder='Full name' />
    </FormField>
  </Form>
)

export default FormExampleRequiredField
