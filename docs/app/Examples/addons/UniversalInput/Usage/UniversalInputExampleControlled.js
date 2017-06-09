import React, { Component } from 'react'
import { Button, Form, Grid, Header, UniversalInput } from 'semantic-ui-react'

export default class UniversalInputExampleControlled extends Component {
  state = {
    finalValue: null,
    value: null,
  }

  handleChange = (e, { finalValue, value }) => this.setState({ finalValue, value })

  setValue = value => () => this.setState({ value })

  render() {
    const { value } = this.state

    return (
      <Grid>
        <Grid.Column width={8}>
          <Form>
            <Form.Field>
              <UniversalInput onChange={this.handleChange} value={value} />
            </Form.Field>
          </Form>
        </Grid.Column>
        <Grid.Column width={8}>
          <Button content='Set "foo"' onClick={this.setValue('foo')} />
          <Button content='Set "bar"' onClick={this.setValue('bar')} />

          <Header>State</Header>
          <pre>{JSON.stringify(this.state, null, 2)}</pre>
        </Grid.Column>
      </Grid>
    )
  }
}
