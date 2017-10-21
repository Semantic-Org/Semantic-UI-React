import React, { Component } from 'react'
import { Grid, Sticky, Table, Visibility } from 'semantic-ui-react'

import Wireframe from '../Wireframe'

export default class VisibilityExampleVisibility extends Component {
  state = {
    calculations: {
      direction: 'none',
      height: 0,
      width: 0,
      topPassed: false,
      bottomPassed: false,
      pixelsPassed: 0,
      percentagePassed: 0,
      topVisible: false,
      bottomVisible: false,
      fits: false,
      passing: false,
      onScreen: false,
      offScreen: false,
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
            <Visibility onUpdate={this.handleUpdate}>
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
                    <Table.Cell>direction</Table.Cell>
                    <Table.Cell>{calculations.direction}</Table.Cell>
                  </Table.Row>
                  <Table.Row>
                    <Table.Cell>pixelsPassed</Table.Cell>
                    <Table.Cell>{calculations.pixelsPassed.toFixed()}px</Table.Cell>
                  </Table.Row>
                  <Table.Row>
                    <Table.Cell>percentagePassed</Table.Cell>
                    <Table.Cell>{(calculations.percentagePassed * 100).toFixed()}%</Table.Cell>
                  </Table.Row>
                  <Table.Row>
                    <Table.Cell>fits</Table.Cell>
                    <Table.Cell>{calculations.fits.toString()}</Table.Cell>
                  </Table.Row>
                  <Table.Row>
                    <Table.Cell>width</Table.Cell>
                    <Table.Cell>{calculations.width.toFixed()}px</Table.Cell>
                  </Table.Row>
                  <Table.Row>
                    <Table.Cell>height</Table.Cell>
                    <Table.Cell>{calculations.height.toFixed()}px</Table.Cell>
                  </Table.Row>
                  <Table.Row>
                    <Table.Cell>onScreen</Table.Cell>
                    <Table.Cell>{calculations.onScreen.toString()}</Table.Cell>
                  </Table.Row>
                  <Table.Row>
                    <Table.Cell>offScreen</Table.Cell>
                    <Table.Cell>{calculations.offScreen.toString()}</Table.Cell>
                  </Table.Row>
                  <Table.Row>
                    <Table.Cell>passing</Table.Cell>
                    <Table.Cell>{calculations.passing.toString()}</Table.Cell>
                  </Table.Row>
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
