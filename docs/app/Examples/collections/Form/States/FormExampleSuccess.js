import React from 'react'
import { Button, Form, Input, Message } from 'semantic-ui-react'

const FormExampleSuccess = () => (
  <Form success>
    <Form.Input label='Email' placeholder='joe@schmoe.com' />
    <Message
      success
      header='Form Completed'
      content="You're all signed up for the newsletter"
    />
    <Button>Submit</Button>
  </Form>
)

export default FormExampleSuccess
