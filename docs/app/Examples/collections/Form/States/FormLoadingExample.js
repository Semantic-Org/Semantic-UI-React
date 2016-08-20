import React from 'react'
import { Button, Form, Input } from 'stardust'

const FormLoadingExample = () => (
  <Form loading>
    <Form.Input label='Email' placeholder='joe@schmoe.com' />
    <Button>Submit</Button>
  </Form>
)

export default FormLoadingExample
