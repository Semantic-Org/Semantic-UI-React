import React from 'react'
import { Form, TextArea } from 'semantic-ui-react'

const TextAreaExampleAutoHeightMinHeight = () => (
  <Form>
    <TextArea autoHeight placeholder='Try adding multiple lines' style={{ minHeight: 100 }} />
  </Form>
)

export default TextAreaExampleAutoHeightMinHeight
