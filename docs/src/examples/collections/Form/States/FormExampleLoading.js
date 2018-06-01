import React from 'react'
import { Button, Form } from 'semantic-ui-react'

const FormExampleLoading = () => (
  <Form loading>
    <Form.Input label='Email' placeholder='joe@schmoe.com' />
    <Button>Submit</Button>
  </Form>
)

export default FormExampleLoading
