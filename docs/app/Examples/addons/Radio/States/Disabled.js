import React from 'react'
import { Form, Radio, Field } from 'stardust'

const RadioDisabledExample = () => (
  <Form>
    <Form.Field>
      <Radio label='Disabled' disabled />
    </Form.Field>
    <Form.Field>
      <Radio type='toggle' label='Disabled' disabled />
    </Form.Field>
  </Form>
)

export default RadioDisabledExample
