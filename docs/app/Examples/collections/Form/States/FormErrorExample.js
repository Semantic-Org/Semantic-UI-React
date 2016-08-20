import React from 'react'
import { Button, Form, Input, Message } from 'stardust'

const FormErrorExample = () => (
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

export default FormErrorExample
