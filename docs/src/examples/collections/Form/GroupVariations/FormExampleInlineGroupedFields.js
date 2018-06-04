import React from 'react'
import { Form, Input } from 'semantic-ui-react'

const FormExampleInlineGroupedFields = () => (
  <Form>
    <Form.Group inline>
      <Form.Field>
        <label>Phone Number</label>
        <Input placeholder='(xxx)' />
      </Form.Field>
      <Form.Field>
        <Input placeholder='xxx' />
      </Form.Field>
      <Form.Field>
        <Input placeholder='xxxx' />
      </Form.Field>
    </Form.Group>
  </Form>
)

export default FormExampleInlineGroupedFields
