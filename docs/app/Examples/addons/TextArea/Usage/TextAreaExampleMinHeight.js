import React from 'react'
import { Form, TextArea } from 'semantic-ui-react'

const TextAreaExampleMinHeight = () => (
  <Form>
    <TextArea placeholder='Try adding multiple lines' autoHeight minHeight={50} />
  </Form>
)

export default TextAreaExampleMinHeight
