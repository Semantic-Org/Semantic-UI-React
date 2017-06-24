import React, { Component } from 'react'
import { Form, Grid, Header, UniversalInput } from 'semantic-ui-react'

export default class UniversalInputExampleTextArea extends Component {
  state = {
    finalValue: null,
    value: null,
  }

  handleChange = (e, { finalValue, value }) => this.setState({ finalValue, value })

  render() {
    return (
      <Grid>
        <Grid.Column width={8}>
          <Form>
            <Form.Field>
              <UniversalInput
                as='textarea'
                onChange={this.handleChange}
                placeholder='Try to type something...'
              />
            </Form.Field>
          </Form>
        </Grid.Column>
        <Grid.Column width={8}>
          <Header>State</Header>
          <pre>{JSON.stringify(this.state, null, 2)}</pre>
        </Grid.Column>
      </Grid>
    )
  }
}
