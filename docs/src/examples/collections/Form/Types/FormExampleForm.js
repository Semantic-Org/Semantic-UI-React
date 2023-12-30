import React from 'react'
import { FormField, Button, Checkbox, Form } from 'semantic-ui-react'

const FormExampleForm = () => (
  <Form>
    <FormField>
      <label>First Name</label>
      <input placeholder='First Name' />
    </FormField>
    <FormField>
      <label>Last Name</label>
      <input placeholder='Last Name' />
    </FormField>
    <FormField>
      <Checkbox label='I agree to the Terms and Conditions' />
    </FormField>
    <Button type='submit'>Submit</Button>
  </Form>
)

export default FormExampleForm
