import React from 'react'
import { FormField, Form, Input, Label } from 'semantic-ui-react'

const LabelExamplePrompt = () => (
  <Form>
    <FormField>
      <Input placeholder='First name' />
      <Label pointing prompt>
        Please enter a value
      </Label>
    </FormField>
  </Form>
)

export default LabelExamplePrompt
