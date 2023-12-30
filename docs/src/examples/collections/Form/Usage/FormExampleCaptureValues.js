import React, { Component } from 'react'
import { FormInput, FormGroup, FormButton, Form } from 'semantic-ui-react'

class FormExampleCaptureValues extends Component {
  state = { name: '', email: '', submittedName: '', submittedEmail: '' }

  handleChange = (e, { name, value }) => this.setState({ [name]: value })

  handleSubmit = () => {
    const { name, email } = this.state

    this.setState({ submittedName: name, submittedEmail: email })
  }

  render() {
    const { name, email, submittedName, submittedEmail } = this.state

    return (
      <div>
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
        <strong>onChange:</strong>
        <pre>{JSON.stringify({ name, email }, null, 2)}</pre>
        <strong>onSubmit:</strong>
        <pre>{JSON.stringify({ submittedName, submittedEmail }, null, 2)}</pre>
      </div>
    )
  }
}

export default FormExampleCaptureValues
