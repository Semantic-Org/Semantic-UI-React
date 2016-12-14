import React from 'react'
import { Grid, Segment, Input, Button, Header, Image, Form, Message } from 'semantic-ui-react'

const LoginForm = () =>
  <Grid centered verticalAlign='middle'>
    <Grid.Column textAlign='center'>
      <Header as='h2' color='teal'>
        <Image src='http://semantic-ui.com/examples/assets/images/logo.png' />
        Log-in to your account
      </Header>
      <Form size='large'>
        <Segment stacked>
          <Form.Field>
            <Input fluid icon='user' iconPosition='left' placeholder='E-mail address' />
          </Form.Field>
          <Form.Field>
            <Input fluid icon='lock' iconPosition='left' placeholder='Password' type='password' />
          </Form.Field>
          <Button fluid color='teal' size='large'>LOGIN</Button>
        </Segment>
        <Message>
          New to us? <a href='#'>Sign Up</a>
        </Message>
      </Form>
    </Grid.Column>
  </Grid>

export default LoginForm
