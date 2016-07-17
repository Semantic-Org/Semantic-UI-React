import React, { Component } from 'react'
import { Form, Checkbox, Field } from 'stardust'

export default class CheckboxDisabledExample extends Component {
  render() {
    return (
      <Form>
        <Form.Field>
          <Checkbox label='Disabled' disabled />
        </Form.Field>
        <Form.Field>
          <Checkbox type='toggle' label='Disabled' disabled />
        </Form.Field>
      </Form>
    )
  }
}
