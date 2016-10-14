import React from 'react'
import { Form, Radio } from 'semantic-ui-react'

const RadioExampleDisabled = () => (
  <Form>
    <Form.Field>
      <Radio label='Disabled' disabled />
    </Form.Field>
    <Form.Field>
      <Radio toggle label='Disabled' disabled />
    </Form.Field>
  </Form>
)

export default RadioExampleDisabled
