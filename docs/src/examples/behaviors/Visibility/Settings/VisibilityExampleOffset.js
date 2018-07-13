import React, { Component } from 'react'
import { Grid, Sticky, Table, Visibility } from 'semantic-ui-react'

import Wireframe from '../Wireframe'

export default class VisibilityExampleOffset extends Component {
  state = {
    calculations: {
      topPassed: false,
      bottomPassed: false,
      topVisible: false,
      bottomVisible: false,
    },
  }

  handleContextRef = contextRef => this.setState({ contextRef })

  handleUpdate = (e, { calculations }) => this.setState({ calculations })

  render() {
    const { calculations, contextRef } = this.state

    return (
      <div ref={this.handleContextRef}>
        <Grid columns={2}>
          <Grid.Column>
            <Visibility offset={[10, 10]} onUpdate={this.handleUpdate}>
              <Wireframe />
            </Visibility>
          </Grid.Column>

          <Grid.Column>
            <Sticky context={contextRef}>
              <Table celled>
                <Table.Header>
                  <Table.Row>
                    <Table.HeaderCell>Calculation</Table.HeaderCell>
                    <Table.HeaderCell>Value</Table.HeaderCell>
                  </Table.Row>
                </Table.Header>
                <Table.Body>
                  <Table.Row>
                    <Table.Cell>topVisible</Table.Cell>
                    <Table.Cell>{calculations.topVisible.toString()}</Table.Cell>
                  </Table.Row>
                  <Table.Row>
                    <Table.Cell>bottomVisible</Table.Cell>
                    <Table.Cell>{calculations.bottomVisible.toString()}</Table.Cell>
                  </Table.Row>
                  <Table.Row>
                    <Table.Cell>topPassed</Table.Cell>
                    <Table.Cell>{calculations.topPassed.toString()}</Table.Cell>
                  </Table.Row>
                  <Table.Row>
                    <Table.Cell>bottomPassed</Table.Cell>
                    <Table.Cell>{calculations.bottomPassed.toString()}</Table.Cell>
                  </Table.Row>
                </Table.Body>
              </Table>
            </Sticky>
          </Grid.Column>
        </Grid>
      </div>
    )
  }
}
