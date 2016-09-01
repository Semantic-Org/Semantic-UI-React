import React from 'react'
import { Form, Input } from 'stardust'

const FormFieldInlineExample = () => (
  <Form>
    <Form.Field inline>
      <label>First name</label>
      <Input placeholder='First name' />
    </Form.Field>
  </Form>
)

export default FormFieldInlineExample
