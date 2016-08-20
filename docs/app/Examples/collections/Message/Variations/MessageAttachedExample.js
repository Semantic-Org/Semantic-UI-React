import React from 'react'
import { Button, Checkbox, Form, Icon, Message } from 'stardust'

// TODO update Button usage after they're updated to v1 API

const MessageAttachedExample = () => (
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
      <Button className='blue submit button'>Submit</Button>
    </Form>
    <Message attached='bottom' warning>
      <Icon name='help' />
      Already signed up?&nbsp;<a href='#'>Login here</a>&nbsp;instead.
    </Message>
  </div>
)

export default MessageAttachedExample
