import React from 'react'
import {
  FormInput,
  FormGroup,
  FormCheckbox,
  Button,
  Form,
  Icon,
  Message,
} from 'semantic-ui-react'

const MessageExampleAttached = () => (
  <div>
    <Message
      attached
      header='Welcome to our site!'
      content='Fill out the form below to sign-up for a new account'
    />
    <Form className='attached fluid segment'>
      <FormGroup widths='equal'>
        <FormInput
          fluid
          label='First Name'
          placeholder='First Name'
          type='text'
        />
        <FormInput
          fluid
          label='Last Name'
          placeholder='Last Name'
          type='text'
        />
      </FormGroup>
      <FormInput label='Username' placeholder='Username' type='text' />
      <FormInput label='Password' type='password' />
      <FormCheckbox inline label='I agree to the terms and conditions' />
      <Button color='blue'>Submit</Button>
    </Form>
    <Message attached='bottom' warning>
      <Icon name='help' />
      Already signed up?&nbsp;<a href='#'>Login here</a>&nbsp;instead.
    </Message>
  </div>
)

export default MessageExampleAttached
