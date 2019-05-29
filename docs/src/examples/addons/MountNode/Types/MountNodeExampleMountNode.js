import React, { Component, createRef } from 'react'
import { Form, Grid, MountNode, Segment } from 'semantic-ui-react'

export default class MountNodeExampleMountNode extends Component {
  state = { className: '' }
  nodeRef = createRef()

  handleChange = (e, { value }) => this.setState({ className: value })

  render() {
    const { className } = this.state

    return (
      <Grid columns={2}>
        <Grid.Column>
          <Form>
            <Form.Input
              placeholder='Enter any className to apply...'
              onChange={this.handleChange}
              value={className}
            />
          </Form>
        </Grid.Column>
        <Grid.Column>
          <Segment>
            <div ref={this.nodeRef}>An example node</div>
          </Segment>
          <MountNode className={className} node={this.nodeRef} />
        </Grid.Column>
      </Grid>
    )
  }
}
