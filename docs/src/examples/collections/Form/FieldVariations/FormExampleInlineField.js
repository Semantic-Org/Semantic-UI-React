import React from 'react'
import { FormField, Form, Input } from 'semantic-ui-react'

const FormExampleInlineField = () => (
  <Form>
    <FormField inline>
      <label>First name</label>
      <Input placeholder='First name' />
    </FormField>
  </Form>
)

export default FormExampleInlineField
