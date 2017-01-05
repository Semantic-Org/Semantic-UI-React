import React from 'react'
import { Checkbox, Form } from 'semantic-ui-react'

const FormExampleFieldLabelElement = () => (
  <Form>
    <Form.Field
      control={Checkbox}
      label={{ children: 'I agree to the Terms and Conditions' }}
    />
  </Form>
)

export default FormExampleFieldLabelElement
