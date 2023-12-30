import React, { Component } from 'react'
import { FormInput, FormGroup, FormButton, Form } from 'semantic-ui-react'

class FormExampleClearOnSubmit extends Component {
  state = {}

  handleChange = (e, { name, value }) => this.setState({ [name]: value })

  handleSubmit = () => this.setState({ email: '', name: '' })

  render() {
    const { name, email } = this.state

    return (
      <Form onSubmit={this.handleSubmit}>
        <FormGroup>
          <FormInput
            placeholder='Name'
            name='name'
            value={name}
            onChange={this.handleChange}
          />
          <FormInput
            placeholder='Email'
            name='email'
            value={email}
            onChange={this.handleChange}
          />
          <FormButton content='Submit' />
        </FormGroup>
      </Form>
    )
  }
}

export default FormExampleClearOnSubmit
