import React from 'react'
import { Button, Checkbox, Field, Fields, Form, Input } from 'stardust'

const fields = {
  firstName: 'empty',
  lastName: 'empty',
  username: 'empty',
  password: 'minLength[6]',
  terms: 'checked',
}

const FormValidatingOnBlurAndOtherEventsExample = (props) => (
  <Form className='segment' fields={fields} on='blur' inline onSuccess={() => false}>
    <p>Let's go ahead and get you signed up.</p>
    <Fields evenlyDivided>
      <Field>
        <label>First Name</label>
        <Input placeholder='First Name' name='firstName' type='text' />
      </Field>
      <Field>
        <label>Last Name</label>
        <Input placeholder='Last Name' name='lastName' type='text' />
      </Field>
    </Fields>
    <Fields evenlyDivided>
      <Field label='Username'>
        <Input placeholder='Username' name='username' type='text' />
      </Field>
      <Field label='Password'>
        <Input type='password' name='password' />
      </Field>
    </Fields>
    <Field className='inline'>
      <Checkbox name='terms' className='hidden' label='I agree to the terms and conditions' />
    </Field>
    <Button className='blue submit'>Submit</Button>
  </Form>
)

export default FormValidatingOnBlurAndOtherEventsExample
