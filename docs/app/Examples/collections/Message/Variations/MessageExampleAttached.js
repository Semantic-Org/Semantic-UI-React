import React from 'react'
import { Button, Form, Icon, Message } from 'semantic-ui-react'

const MessageExampleAttached = () => (
  <div>
    <Message
      attached
      header='Welcome to our site!'
      content='Fill out the form below to sign-up for a new account'
    />
    <Form className='attached fluid segment'>
      <Form.Group widths='equal'>
        <Form.Input label='First Name' placeholder='First Name' type='text' />
        <Form.Input label='Last Name' placeholder='Last Name' type='text' />
      </Form.Group>
      <Form.Input label='Username' placeholder='Username' type='text' />
      <Form.Input label='Password' type='password' />
      <Form.Checkbox inline label='I agree to the terms and conditions' />
      <Button color='blue'>Submit</Button>
    </Form>
    <Message attached='bottom' warning>
      <Icon name='help' />
      Already signed up?&nbsp;<a href='#'>Login here</a>&nbsp;instead.
    </Message>
  </div>
)

export default MessageExampleAttached
