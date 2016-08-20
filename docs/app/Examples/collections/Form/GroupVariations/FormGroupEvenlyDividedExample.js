import React from 'react'
import { Form, Input } from 'stardust'

const FormGroupEvenlyDividedExample = () => (
  <Form>
    <Form.Group widths='equal'>
      <Form.Field>
        <label>First name</label>
        <Input placeholder='First name' />
      </Form.Field>
      <Form.Field>
        <label>Last name</label>
        <Input placeholder='Last name' />
      </Form.Field>
    </Form.Group>
  </Form>
)

export default FormGroupEvenlyDividedExample
