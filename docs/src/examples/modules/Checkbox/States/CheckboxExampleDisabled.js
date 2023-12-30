import React from 'react'
import { FormField, Form, Checkbox } from 'semantic-ui-react'

const CheckboxExampleDisabled = () => (
  <Form>
    <FormField>
      <Checkbox label='Disabled' disabled />
    </FormField>
    <FormField>
      <Checkbox toggle label='Disabled' disabled />
    </FormField>
  </Form>
)

export default CheckboxExampleDisabled
