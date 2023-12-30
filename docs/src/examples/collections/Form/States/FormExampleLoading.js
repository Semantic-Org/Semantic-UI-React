import React from 'react'
import { FormInput, Button, Form } from 'semantic-ui-react'

const FormExampleLoading = () => (
  <Form loading>
    <FormInput label='Email' placeholder='joe@schmoe.com' />
    <Button>Submit</Button>
  </Form>
)

export default FormExampleLoading
