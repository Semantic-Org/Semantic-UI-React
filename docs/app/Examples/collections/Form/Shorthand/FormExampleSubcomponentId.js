import React, { Component } from 'react'
import { Form, Input } from 'semantic-ui-react'

class FormExampleSubcomponentId extends Component {
  state = {}

  render() {
    return (
      <Form>
        <Form.Group widths='equal'>
          <Form.Input id='form-subcomponent-shorthand-input-first-name' label='First name' placeholder='First name' />
          <Form.Input id='form-subcomponent-shorthand-input-last-name' label='First name' placeholder='First name' />
        </Form.Group>
      </Form>
    )
  }
}

export default FormExampleSubcomponentId
