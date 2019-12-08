import React from 'react'
import { Checkbox, Form } from 'semantic-ui-react'

const FormExampleFieldLabelElement = () => (
  <Form>
    <Form.Field
      control={Checkbox}
      label={<label>I agree to the Terms and Conditions</label>}
    />
  </Form>
)

export default FormExampleFieldLabelElement
