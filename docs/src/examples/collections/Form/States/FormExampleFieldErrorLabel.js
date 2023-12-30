import React from 'react'
import { FormInput, FormCheckbox, Form } from 'semantic-ui-react'

const FormExampleFieldErrorLabel = () => (
  <Form>
    <FormInput
      error={{ content: 'Please enter your first name', pointing: 'below' }}
      fluid
      label='First name'
      placeholder='First name'
      id='form-input-first-name'
    />
    <FormInput
      error='Please enter your last name'
      fluid
      label='Last name'
      placeholder='Last name'
    />
    <FormCheckbox
      label='I agree to the Terms and Conditions'
      error={{
        content: 'You must agree to the terms and conditions',
        pointing: 'left',
      }}
    />
  </Form>
)

export default FormExampleFieldErrorLabel
