import React, { Component } from 'react'
import { Form, Grid, Header, UniversalInput } from 'semantic-ui-react'

export default class UniversalInputExampleOnCompose extends Component {
  state = {
    finalValue: null,
    value: null,
  }

  handleCompose = (e, { finalValue, value }) => this.setState({ finalValue, value })

  render() {
    return (
      <Grid>
        <Grid.Column width={8}>
          <Form>
            <Form.Field>
              <UniversalInput onCompose={this.handleCompose} />
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
