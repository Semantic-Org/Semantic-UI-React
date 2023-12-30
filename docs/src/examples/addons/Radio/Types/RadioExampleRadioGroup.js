import React, { Component } from 'react'
import { FormField, Form, Radio } from 'semantic-ui-react'

export default class RadioExampleRadioGroup extends Component {
  state = {}
  handleChange = (e, { value }) => this.setState({ value })

  render() {
    return (
      <Form>
        <FormField>
          Selected value: <b>{this.state.value}</b>
        </FormField>
        <FormField>
          <Radio
            label='Choose this'
            name='radioGroup'
            value='this'
            checked={this.state.value === 'this'}
            onChange={this.handleChange}
          />
        </FormField>
        <FormField>
          <Radio
            label='Or that'
            name='radioGroup'
            value='that'
            checked={this.state.value === 'that'}
            onChange={this.handleChange}
          />
        </FormField>
      </Form>
    )
  }
}
