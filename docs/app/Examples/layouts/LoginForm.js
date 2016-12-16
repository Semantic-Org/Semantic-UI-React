import React from 'react'
import { Container, Segment, Input, Button, Header, Image, Form, Message } from 'semantic-ui-react'

const LoginForm = () => (
    <Container as='div'>
      <Header as='h2' color='teal' textAlign='center'>
        <Image src='http://react.semantic-ui.com/logo.png' />
        {' '}Log-in to your account
      </Header>
      <Form size='small'>
        <Segment stacked>
          <Form.Field>
            <Input fluid icon='user' iconPosition='left' placeholder='E-mail address' />
          </Form.Field>
          <Form.Field>
            <Input fluid icon='lock' iconPosition='left' placeholder='Password' type='password' />
          </Form.Field>
          <Button fluid color='teal' size='small'>LOGIN</Button>
        </Segment>
        <Message size='small'>
          <Header as='p' textAlign='center'>  New to us? <a href='#'>Sign Up</a></Header>
        </Message>
      </Form>
    </Container>
)
export default LoginForm
