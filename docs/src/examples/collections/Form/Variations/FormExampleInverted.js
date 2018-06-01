import React from 'react'
import { Button, Form, Segment } from 'semantic-ui-react'

const FormExampleInverted = () => (
  <Segment inverted>
    <Form inverted>
      <Form.Group widths='equal'>
        <Form.Input fluid label='First name' placeholder='First name' />
        <Form.Input fluid label='Last name' placeholder='Last name' />
      </Form.Group>
      <Form.Checkbox label='I agree to the Terms and Conditions' />
      <Button type='submit'>Submit</Button>
    </Form>
  </Segment>
)
export default FormExampleInverted
