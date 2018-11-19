import React, { Component, createRef } from 'react'
import { Grid, Table, Ref, Segment } from 'semantic-ui-react'

export default class RefExampleRef extends Component {
  state = {}

  createdRef = createRef()
  functionalRef = null

  handleRef = (node) => {
    this.functionalRef = node
  }

  componentDidMount() {
    // eslint-disable-next-line react/no-did-mount-set-state
    this.setState({ isMounted: true })
  }

  render() {
    const { isMounted } = this.state

    return (
      <Grid>
        <Grid.Column width={6}>
          <Segment.Group>
            <Ref innerRef={this.handleRef}>
              <Segment>An example node with functional ref</Segment>
            </Ref>
            <Ref innerRef={this.createdRef}>
              <Segment>
                An example node with ref from <code>createRef()</code>
              </Segment>
            </Ref>
          </Segment.Group>
        </Grid.Column>
        <Grid.Column width={10}>
          {isMounted && (
            <Table>
              <Table.Header>
                <Table.Row>
                  <Table.HeaderCell>Type</Table.HeaderCell>
                  <Table.HeaderCell>
                    <code>nodeName</code>
                  </Table.HeaderCell>
                  <Table.HeaderCell>
                    <code>textContent</code>
                  </Table.HeaderCell>
                </Table.Row>
              </Table.Header>

              <Table.Body>
                <Table.Row>
                  <Table.Cell>Functional ref</Table.Cell>
                  <Table.Cell>{this.functionalRef.nodeName}</Table.Cell>
                  <Table.Cell>{this.functionalRef.textContent}</Table.Cell>
                </Table.Row>

                <Table.Row>
                  <Table.Cell singleLine>
                    From <code>createRef()</code>
                  </Table.Cell>
                  <Table.Cell>{this.createdRef.current.nodeName}</Table.Cell>
                  <Table.Cell>{this.createdRef.current.textContent}</Table.Cell>
                </Table.Row>
              </Table.Body>
            </Table>
          )}
        </Grid.Column>
      </Grid>
    )
  }
}
