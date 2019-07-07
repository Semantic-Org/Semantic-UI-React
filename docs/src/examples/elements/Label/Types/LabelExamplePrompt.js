import React from 'react'
import { Form, Input, Label } from 'semantic-ui-react'

const LabelExamplePrompt = () => (
  <Form>
    <Form.Field>
      <Input placeholder='First name' />
      <Label pointing prompt>
        Please enter a value
      </Label>
    </Form.Field>
  </Form>
)

export default LabelExamplePrompt
