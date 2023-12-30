import React from 'react'
import {
  FormInput,
  FormGroup,
  FormCheckbox,
  Button,
  Form,
} from 'semantic-ui-react'

const FormExampleUnstackableGroup = () => (
  <Form>
    <FormGroup unstackable widths={2}>
      <FormInput label='First name' placeholder='First name' />
      <FormInput label='Last name' placeholder='Last name' />
    </FormGroup>
    <FormGroup widths={2}>
      <FormInput label='Address' placeholder='Address' />
      <FormInput label='Phone' placeholder='Phone' />
    </FormGroup>
    <FormCheckbox label='I agree to the Terms and Conditions' />
    <Button type='submit'>Submit</Button>
  </Form>
)

export default FormExampleUnstackableGroup
