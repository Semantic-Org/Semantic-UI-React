import React from 'react'
import { Form, TextArea } from 'semantic-ui-react'

const TextAreaExampleAutoHeightRows = () => (
  <Form>
    <TextArea autoHeight placeholder='Try adding multiple lines' rows={2} />
  </Form>
)

export default TextAreaExampleAutoHeightRows
