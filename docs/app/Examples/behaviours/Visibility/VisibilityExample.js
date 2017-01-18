import React, { Component } from 'react'
import {
  Divider,
  Grid,
  Image,
  Segment,
  Table,
  Visibility,
} from 'semantic-ui-react'

class VisibilityExample extends Component {
  constructor(props, context) {
    super(props, context)

    this.state = {
      calculations: {
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

    this.handleUpdate = this.handleUpdate.bind(this)
  }

  handleUpdate(calculations) {
    this.setState({ calculations })
  }

  render() {
    return (
      <Grid columns={2}>
        <Grid.Column>
          <Visibility onUpdate={this.handleUpdate}>
            <Segment>
              <Image src='http://semantic-ui.com/images/wireframe/centered-paragraph.png' />
              <Divider />
              <Image src='http://semantic-ui.com/images/wireframe/short-paragraph.png' />
              <Divider />
              <Image src='http://semantic-ui.com/images/wireframe/media-paragraph.png' />
              <Divider />
              <Image src='http://semantic-ui.com/images/wireframe/paragraph.png' />
              <Divider />
              <Image src='http://semantic-ui.com/images/wireframe/centered-paragraph.png' />
              <Divider />
              <Image src='http://semantic-ui.com/images/wireframe/short-paragraph.png' />
              <Divider />
              <Image src='http://semantic-ui.com/images/wireframe/media-paragraph.png' />
              <Divider />
              <Image src='http://semantic-ui.com/images/wireframe/paragraph.png' />
              <Divider />
              <Image src='http://semantic-ui.com/images/wireframe/short-paragraph.png' />
              <Divider />
              <Image src='http://semantic-ui.com/images/wireframe/centered-paragraph.png' />
              <Divider />
              <Image src='http://semantic-ui.com/images/wireframe/short-paragraph.png' />
              <Divider />
              <Image src='http://semantic-ui.com/images/wireframe/media-paragraph.png' />
              <Divider />
              <Image src='http://semantic-ui.com/images/wireframe/paragraph.png' />
              <Divider />
              <Image src='http://semantic-ui.com/images/wireframe/short-paragraph.png' />
            </Segment>
          </Visibility>
        </Grid.Column>

        <Grid.Column>
          <Table celled>
            <Table.Header>
              <Table.Row>
                <Table.HeaderCell>Calculation</Table.HeaderCell>
                <Table.HeaderCell>Value</Table.HeaderCell>
              </Table.Row>
            </Table.Header>
            <Table.Body>
              <Table.Row>
                <Table.Cell>pixelsPassed</Table.Cell>
                <Table.Cell>{this.state.calculations.pixelsPassed.toFixed()}px</Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>percentagePassed</Table.Cell>
                <Table.Cell>{(this.state.calculations.percentagePassed * 100).toFixed()}%</Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>fits</Table.Cell>
                <Table.Cell>{this.state.calculations.fits.toString()}</Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>width</Table.Cell>
                <Table.Cell>{this.state.calculations.width.toFixed()}px</Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>height</Table.Cell>
                <Table.Cell>{this.state.calculations.height.toFixed()}px</Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>onScreen</Table.Cell>
                <Table.Cell>{this.state.calculations.onScreen.toString()}</Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>offScreen</Table.Cell>
                <Table.Cell>{this.state.calculations.offScreen.toString()}</Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>passing</Table.Cell>
                <Table.Cell>{this.state.calculations.passing.toString()}</Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>topVisible</Table.Cell>
                <Table.Cell>{this.state.calculations.topVisible.toString()}</Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>bottomVisible</Table.Cell>
                <Table.Cell>{this.state.calculations.bottomVisible.toString()}</Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>topPassed</Table.Cell>
                <Table.Cell>{this.state.calculations.topPassed.toString()}</Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>bottomPassed</Table.Cell>
                <Table.Cell>{this.state.calculations.bottomPassed.toString()}</Table.Cell>
              </Table.Row>
            </Table.Body>
          </Table>
        </Grid.Column>
      </Grid>
    )
  }
}

export default VisibilityExample
