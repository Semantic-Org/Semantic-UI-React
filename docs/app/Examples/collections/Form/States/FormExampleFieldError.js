import React from 'react'
import { Checkbox, Form, Input, Select } from 'semantic-ui-react'

const items = [
  { key: 'm', text: 'Male', value: 'male' },
  { key: 'f', text: 'Female', value: 'female' },
]

const FormExampleFieldError = () => (
  <Form>
    <Form.Group widths='equal'>
      <Form.Input label='First name' placeholder='First name' error />
      <Form.Input label='Last name' placeholder='Last name' />
    </Form.Group>
    <Form.Select items={items} placeholder='Gender' error />
    <Form.Checkbox label='I agree to the Terms and Conditions' error />
  </Form>
)

export default FormExampleFieldError
