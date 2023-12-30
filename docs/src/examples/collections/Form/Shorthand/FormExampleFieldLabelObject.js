import React from 'react'
import { FormField, Checkbox, Form } from 'semantic-ui-react'

const FormExampleFieldLabelObject = () => (
  <Form>
    <FormField
      control={Checkbox}
      label={{ children: 'I agree to the Terms and Conditions' }}
    />
  </Form>
)

export default FormExampleFieldLabelObject
