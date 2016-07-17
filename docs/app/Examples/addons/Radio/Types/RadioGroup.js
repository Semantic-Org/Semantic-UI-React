import React, { Component } from 'react'
import { Form, Radio } from 'stardust'

export default class RadioGroupExample extends Component {
  state = {}
  handleClick = (e, { value }) => this.setState({ value })

  render() {
    return (
      <Form>
        <Form.Field>
          Selected value: <b>{this.state.value}</b>
        </Form.Field>
        <Form.Field>
          <Radio
            label='Choose this'
            name='radioGroup'
            value='this'
            checked={this.state.value === 'this'}
            onClick={this.handleClick}
          />
        </Form.Field>
        <Form.Field>
          <Radio
            label='Or that'
            name='radioGroup'
            value='that'
            checked={this.state.value === 'that'}
            onClick={this.handleClick}
          />
        </Form.Field>
      </Form>
    )
  }
}
