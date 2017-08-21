import React, { Component } from 'react'
import { Form } from 'semantic-ui-react'

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
          <Form.Group>
            <Form.Input placeholder='Name' name='name' value={name} onChange={this.handleChange} />
            <Form.Input placeholder='Email' name='email' value={email} onChange={this.handleChange} />
            <Form.Button content='Submit' />
          </Form.Group>
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
