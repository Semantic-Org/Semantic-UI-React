import React from 'react'
import { FormField, Checkbox, Form } from 'semantic-ui-react'

const FormExampleFieldLabelElement = () => (
  <Form>
    <FormField
      control={Checkbox}
      label={<label>I agree to the Terms and Conditions</label>}
    />
  </Form>
)

export default FormExampleFieldLabelElement
