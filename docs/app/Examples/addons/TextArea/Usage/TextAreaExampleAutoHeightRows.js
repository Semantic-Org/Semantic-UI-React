import React from 'react'
import { Form, TextArea } from 'semantic-ui-react'

const TextAreaExampleAutoHeightRows = () => (
  <Form>
    <TextArea autoHeight placeholder='Try adding multiple lines' rows={1} />
  </Form>
)

export default TextAreaExampleAutoHeightRows
