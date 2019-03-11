import _ from 'lodash'
import React, { Component, createRef } from 'react'
import {
  Divider,
  Grid,
  Image,
  Segment,
  Sticky,
  Table,
  Ref,
  Visibility,
} from 'semantic-ui-react'

export default class VisibilityExampleOffset extends Component {
  state = {
    calculations: {
      topPassed: false,
      bottomPassed: false,
      topVisible: false,
      bottomVisible: false,
    },
  }
  contextRef = createRef()

  handleUpdate = (e, { calculations }) => this.setState({ calculations })

  render() {
    const { calculations } = this.state

    return (
      <Ref innerRef={this.contextRef}>
        <Grid columns={2}>
          <Grid.Column>
            <Visibility offset={[10, 10]} onUpdate={this.handleUpdate}>
              <Segment>
                {_.map(
                  [
                    '/images/wireframe/centered-paragraph.png',
                    '/images/wireframe/short-paragraph.png',
                    '/images/wireframe/media-paragraph.png',
                    '/images/wireframe/paragraph.png',
                    '/images/wireframe/centered-paragraph.png',
                    '/images/wireframe/short-paragraph.png',
                    '/images/wireframe/media-paragraph.png',
                    '/images/wireframe/paragraph.png',
                    '/images/wireframe/centered-paragraph.png',
                    '/images/wireframe/short-paragraph.png',
                    '/images/wireframe/media-paragraph.png',
                    '/images/wireframe/paragraph.png',
                  ],
                  (src, index, images) => (
                    <React.Fragment key={index}>
                      <Image src={src} />
                      {index !== images.length - 1 && <Divider />}
                    </React.Fragment>
                  ),
                )}
              </Segment>
            </Visibility>
          </Grid.Column>

          <Grid.Column>
            <Sticky context={this.contextRef}>
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
                  <Table.Row>
                    <Table.Cell>topPassed</Table.Cell>
                    <Table.Cell>{calculations.topPassed.toString()}</Table.Cell>
                  </Table.Row>
                  <Table.Row>
                    <Table.Cell>bottomPassed</Table.Cell>
                    <Table.Cell>
                      {calculations.bottomPassed.toString()}
                    </Table.Cell>
                  </Table.Row>
                </Table.Body>
              </Table>
            </Sticky>
          </Grid.Column>
        </Grid>
      </Ref>
    )
  }
}
