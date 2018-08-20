import React, { Component } from 'react'
import { Grid, Table, Ref, Segment } from 'semantic-ui-react'

export default class RefExampleRef extends Component {
  state = {}

  handleRef = node => this.setState({ node })

  render() {
    const { node } = this.state

    return (
      <Grid columns={2}>
        <Grid.Column>
          <Ref innerRef={this.handleRef}>
            <Segment>An example node</Segment>
          </Ref>
        </Grid.Column>
        <Grid.Column>
          {node && (
            <Table>
              <Table.Body>
                <Table.Row>
                  <Table.Cell>nodeName</Table.Cell>
                  <Table.Cell>{node.nodeName}</Table.Cell>
                </Table.Row>
                <Table.Row>
                  <Table.Cell>nodeType</Table.Cell>
                  <Table.Cell>{node.nodeType}</Table.Cell>
                </Table.Row>
                <Table.Row>
                  <Table.Cell>textContent</Table.Cell>
                  <Table.Cell>{node.textContent}</Table.Cell>
                </Table.Row>
              </Table.Body>
            </Table>
          )}
        </Grid.Column>
      </Grid>
    )
  }
}
