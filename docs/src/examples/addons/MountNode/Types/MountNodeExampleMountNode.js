import React, { Component } from 'react'
import { Form, Grid, MountNode, Segment } from 'semantic-ui-react'

export default class MountNodeExampleMountNode extends Component {
  state = { className: '' }

  handleChange = (e, { value }) => this.setState({ className: value })

  handleRef = node => this.setState({ node })

  render() {
    const { className, node } = this.state

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
            {node && <MountNode className={className} node={node} />}
            <div ref={this.handleRef}>An example node</div>
          </Segment>
        </Grid.Column>
      </Grid>
    )
  }
}
