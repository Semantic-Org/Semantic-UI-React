import React from 'react'
import { Button, Form, Message } from 'semantic-ui-react'

const FormExampleError = () => (
  <Form error>
    <Form.Input label='Email' placeholder='joe@schmoe.com' />
    <Message
      error
      header='Action Forbidden'
      content='You can only sign up for an account once with a given e-mail address.'
    />
    <Button>Submit</Button>
  </Form>
)

export default FormExampleError
