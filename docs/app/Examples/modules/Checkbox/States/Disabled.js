import React, { Component } from 'react'
import { Form, Checkbox } from 'semantic-ui-react'

export default class CheckboxDisabledExample extends Component {
  render() {
    return (
      <Form>
        <Form.Field>
          <Checkbox label='Disabled' disabled />
        </Form.Field>
        <Form.Field>
          <Checkbox toggle label='Disabled' disabled />
        </Form.Field>
      </Form>
    )
  }
}
