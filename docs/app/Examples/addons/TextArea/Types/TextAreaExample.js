import React, { Component } from 'react'
import { Form, TextArea } from 'semantic-ui-react'

class TextAreaExample extends Component {
  render() {
    return (
      <Form>
        <Form.Field>
          <Form.TextArea name='TextArea' label='TextArea' placeholder='TextArea placeholder text' rows='3' />
        </Form.Field>
      </Form>
    )
  }
}

export default TextAreaExample
