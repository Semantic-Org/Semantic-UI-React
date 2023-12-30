import React from 'react'
import {
  FormSelect,
  FormInput,
  FormGroup,
  FormCheckbox,
  Form,
} from 'semantic-ui-react'

const options = [
  { key: 'm', text: 'Male', value: 'male' },
  { key: 'f', text: 'Female', value: 'female' },
  { key: 'o', text: 'Other', value: 'other' },
]

const FormExampleFieldError = () => (
  <Form>
    <FormGroup widths='equal'>
      <FormInput fluid label='First name' placeholder='First name' error />
      <FormInput fluid label='Last name' placeholder='Last name' />
    </FormGroup>
    <FormSelect options={options} placeholder='Gender' error />
    <FormCheckbox label='I agree to the Terms and Conditions' error />
  </Form>
)

export default FormExampleFieldError
