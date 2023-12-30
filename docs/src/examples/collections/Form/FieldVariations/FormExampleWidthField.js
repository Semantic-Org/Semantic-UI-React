import React from 'react'
import { FormInput, FormGroup, Form } from 'semantic-ui-react'

const FormExampleWidthField = () => (
  <Form>
    <FormGroup>
      <FormInput label='First name' placeholder='First Name' width={6} />
      <FormInput label='Middle Name' placeholder='Middle Name' width={4} />
      <FormInput label='Last Name' placeholder='Last Name' width={6} />
    </FormGroup>
    <FormGroup>
      <FormInput placeholder='2 Wide' width={2} />
      <FormInput placeholder='12 Wide' width={12} />
      <FormInput placeholder='2 Wide' width={2} />
    </FormGroup>
    <FormGroup>
      <FormInput placeholder='8 Wide' width={8} />
      <FormInput placeholder='6 Wide' width={6} />
      <FormInput placeholder='2 Wide' width={2} />
    </FormGroup>
  </Form>
)

export default FormExampleWidthField
