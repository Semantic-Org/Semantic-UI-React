import React from 'react'
import { Form, Input } from 'stardust'

const FormFieldDisabledExample = () => (
  <Form>
    <Form.Group widths='equal'>
      <Form.Input label='First name' placeholder='Disabled' disabled />
      <Form.Input label='Last name' placeholder='Disabled' disabled />
    </Form.Group>
  </Form>
)

export default FormFieldDisabledExample
