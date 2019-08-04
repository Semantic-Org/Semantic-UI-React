import React, { Component } from 'react'
import { Form } from 'semantic-ui-react'

class FormExampleClearOnSubmit extends Component {
  state = {}

  handleChange = (e, { name, value }) => this.setState({ [name]: value })

  handleSubmit = () => this.setState({ email: '', name: '' })

  render() {
    const { name, email } = this.state

    return (
      <Form onSubmit={this.handleSubmit}>
        <Form.Group>
          <Form.Input
            placeholder='Name'
            name='name'
            value={name}
            onChange={this.handleChange}
          />
          <Form.Input
            placeholder='Email'
            name='email'
            value={email}
            onChange={this.handleChange}
          />
          <Form.Button content='Submit' />
        </Form.Group>
      </Form>
    )
  }
}

export default FormExampleClearOnSubmit
