import React from 'react'
import { Form } from 'semantic-ui-react'

const FormExampleSubcomponentId = () => (
  <Form>
    <Form.Group widths='equal'>
      <Form.Input id='form-subcomponent-shorthand-input-first-name' label='First name' placeholder='First name' />
      <Form.Input id='form-subcomponent-shorthand-input-last-name' label='First name' placeholder='First name' />
    </Form.Group>
  </Form>
)

export default FormExampleSubcomponentId
