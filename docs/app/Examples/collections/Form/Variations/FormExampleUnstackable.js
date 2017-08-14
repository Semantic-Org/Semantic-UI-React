import React from 'react'
import { Button, Form } from 'semantic-ui-react'

const FormExampleUnstackable = () => (
  <Form unstackable>
    <Form.Group widths={2}>
      <Form.Input label='First name' placeholder='First name' />
      <Form.Input label='Last name' placeholder='Last name' />
    </Form.Group>
    <Form.Checkbox label='I agree to the Terms and Conditions' />
    <Button type='submit'>Submit</Button>
  </Form>
)
export default FormExampleUnstackable
