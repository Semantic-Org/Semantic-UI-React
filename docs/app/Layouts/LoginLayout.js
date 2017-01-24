import React from 'react'
import {
  Button,
  Container,
  Divider,
  Form,
  Header,
  Image,
  Input,
  Message,
  Segment,
} from 'semantic-ui-react'

const LoginForm = () => (
    <Container text>
      <Divider hidden section />
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
