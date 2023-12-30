import React from 'react'
import { FormCheckbox, Form } from 'semantic-ui-react'

const FormExampleRequiredFieldShorthand = () => (
  <Form>
    <FormCheckbox inline label='I agree to the terms and conditions' required />
  </Form>
)

export default FormExampleRequiredFieldShorthand
