import React, { Component, createRef } from 'react'
import {
  Checkbox,
  Grid,
  Segment,
  Sticky,
  Table,
  Ref,
  Visibility,
} from 'semantic-ui-react'

import Wireframe from '../Wireframe'

export default class VisibilityExampleUpdateOn extends Component {
  state = {
    calculations: {
      topVisible: false,
      bottomVisible: false,
    },
    showWireframe: true,
  }
  contextRef = createRef()

  handleUpdate = (e, { calculations }) => this.setState({ calculations })

  handleWireframe = (e, { checked }) =>
    this.setState({ showWireframe: checked })

  render() {
    const { calculations, showWireframe } = this.state

    return (
      <Ref innerRef={this.contextRef}>
        <Grid columns={2}>
          <Grid.Column>
            {showWireframe ? <Wireframe /> : null}

            <Visibility
              offset={[10, 10]}
              onUpdate={this.handleUpdate}
              updateOn='repaint'
            >
              <Segment>
                It's a tricky <code>Segment</code>
              </Segment>
            </Visibility>
          </Grid.Column>

          <Grid.Column>
            <Sticky context={this.contextRef}>
              <Segment>
                <Checkbox
                  checked={showWireframe}
                  label='Show Wifeframe'
                  onChange={this.handleWireframe}
                  toggle
                />

                <Table basic='very' celled>
                  <Table.Header>
                    <Table.Row>
                      <Table.HeaderCell>Calculation</Table.HeaderCell>
                      <Table.HeaderCell>Value</Table.HeaderCell>
                    </Table.Row>
                  </Table.Header>
                  <Table.Body>
                    <Table.Row>
                      <Table.Cell>topVisible</Table.Cell>
                      <Table.Cell>
                        {calculations.topVisible.toString()}
                      </Table.Cell>
                    </Table.Row>
                    <Table.Row>
                      <Table.Cell>bottomVisible</Table.Cell>
                      <Table.Cell>
                        {calculations.bottomVisible.toString()}
                      </Table.Cell>
                    </Table.Row>
                  </Table.Body>
                </Table>
              </Segment>
            </Sticky>
          </Grid.Column>
        </Grid>
      </Ref>
    )
  }
}
