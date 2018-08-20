import React from 'react'
import { Form, Input } from 'semantic-ui-react'

const FormExampleEvenlyDividedGroup = () => (
  <Form>
    <Form.Group widths='equal'>
      <Form.Field>
        <label>First name</label>
        <Input fluid placeholder='First name' />
      </Form.Field>
      <Form.Field>
        <label>Middle name</label>
        <Input fluid placeholder='Middle name' />
      </Form.Field>
      <Form.Field>
        <label>Last name</label>
        <Input fluid placeholder='Last name' />
      </Form.Field>
    </Form.Group>
  </Form>
)

export default FormExampleEvenlyDividedGroup
