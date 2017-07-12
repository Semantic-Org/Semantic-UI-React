import React from 'react'
import { Checkbox, Form } from 'semantic-ui-react'

const FormExampleFieldLabelObject = () => (
  <Form>
    <Form.Field
      control={Checkbox}
      label={{ children: 'I agree to the Terms and Conditions' }}
    />
  </Form>
)

export default FormExampleFieldLabelObject
