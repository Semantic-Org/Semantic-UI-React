import React from 'react'
import { Form } from 'semantic-ui-react'

const FormExampleFieldDisabled = () => (
  <Form>
    <Form.Group widths='equal'>
      <Form.Input fluid label='First name' placeholder='Disabled' disabled />
      <Form.Input fluid label='Last name' placeholder='Disabled' disabled />
    </Form.Group>
  </Form>
)

export default FormExampleFieldDisabled
