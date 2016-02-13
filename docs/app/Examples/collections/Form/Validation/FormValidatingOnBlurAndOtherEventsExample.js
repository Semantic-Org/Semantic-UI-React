import React from 'react'
import { Button, Checkbox, Form, Input } from 'stardust'

const fields = {
  firstName: 'empty',
  lastName: 'empty',
  username: 'empty',
  password: 'minLength[6]',
  terms: 'checked',
}

const FormValidatingOnBlurAndOtherEventsExample = (props) => (
  <Form className='segment' fields={fields} on='blur' inline>
    <p>Let's go ahead and get you signed up.</p>
    <Form.Fields evenlyDivided>
      <Form.Field>
        <label>First Name</label>
        <Input placeholder='First Name' name='firstName' type='text' />
      </Form.Field>
      <Form.Field>
        <label>Last Name</label>
        <Input placeholder='Last Name' name='lastName' type='text' />
      </Form.Field>
    </Form.Fields>
    <Form.Fields evenlyDivided>
      <Form.Field label='Username'>
        <Input placeholder='Username' name='username' type='text' />
      </Form.Field>
      <Form.Field label='Password'>
        <Input type='password' name='password' />
      </Form.Field>
    </Form.Fields>
    <Form.Field className='inline'>
      <Checkbox name='terms' className='hidden' label='I agree to the terms and conditions' />
    </Form.Field>
    <Button className='blue submit'>Submit</Button>
  </Form>
)

export default FormValidatingOnBlurAndOtherEventsExample
