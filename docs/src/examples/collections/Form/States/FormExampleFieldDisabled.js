import React from 'react'
import { FormInput, FormGroup, Form } from 'semantic-ui-react'

const FormExampleFieldDisabled = () => (
  <Form>
    <FormGroup widths='equal'>
      <FormInput fluid label='First name' placeholder='Disabled' disabled />
      <FormInput fluid label='Last name' placeholder='Disabled' disabled />
    </FormGroup>
  </Form>
)

export default FormExampleFieldDisabled
