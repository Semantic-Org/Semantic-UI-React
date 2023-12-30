import React from 'react'
import {
  FormInput,
  FormGroup,
  FormCheckbox,
  Button,
  Form,
  Segment,
} from 'semantic-ui-react'

const FormExampleInverted = () => (
  <Segment inverted>
    <Form inverted>
      <FormGroup widths='equal'>
        <FormInput fluid label='First name' placeholder='First name' />
        <FormInput fluid label='Last name' placeholder='Last name' />
      </FormGroup>
      <FormCheckbox label='I agree to the Terms and Conditions' />
      <Button type='submit'>Submit</Button>
    </Form>
  </Segment>
)
export default FormExampleInverted
