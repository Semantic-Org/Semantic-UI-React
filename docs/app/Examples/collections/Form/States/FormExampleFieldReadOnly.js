import React from 'react'
import { Form } from 'semantic-ui-react'

const FormExampleFieldReadOnly = () => (
  <Form>
    <Form.Group widths='equal'>
      <Form.Input label='First name' placeholder='Read only' readOnly />
      <Form.Input label='Last name' placeholder='Read only' readOnly />
    </Form.Group>
  </Form>
)

export default FormExampleFieldReadOnly
