import React, { Component } from 'react'
import { Form, Grid, Header, UniversalInput } from 'semantic-ui-react'

export default class UniversalInputExampleInput extends Component {
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
              <UniversalInput onChange={this.handleChange} placeholder='Try to type something...' />
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
