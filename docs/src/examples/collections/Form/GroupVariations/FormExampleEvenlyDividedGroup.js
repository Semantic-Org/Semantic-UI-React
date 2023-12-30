import React from 'react'
import { FormGroup, FormField, Form, Input } from 'semantic-ui-react'

const FormExampleEvenlyDividedGroup = () => (
  <Form>
    <FormGroup widths='equal'>
      <FormField>
        <label>First name</label>
        <Input fluid placeholder='First name' />
      </FormField>
      <FormField>
        <label>Middle name</label>
        <Input fluid placeholder='Middle name' />
      </FormField>
      <FormField>
        <label>Last name</label>
        <Input fluid placeholder='Last name' />
      </FormField>
    </FormGroup>
  </Form>
)

export default FormExampleEvenlyDividedGroup
