import React from 'react'
import { Divider, Image, Grid, Segment } from 'stardust'

const { Column, Row } = Grid
const image = <Image src='http://semantic-ui.com/images/wireframe/paragraph.png' />

const GridStretchedExamples = () => (
  <div>
    <Grid columns={3} divided>
      <Row stretched>
        <Column>
          <Segment>1</Segment>
        </Column>
        <Column>
          <Segment>1</Segment>
          <Segment>2</Segment>
        </Column>
        <Column>
          <Segment>1</Segment>
          <Segment>2</Segment>
          <Segment>3</Segment>
        </Column>
      </Row>
    </Grid>

    <Divider />

    <Grid columns='equal'>
      <Row stretched>
        <Column>
          <Segment>1</Segment>
          <Segment>2</Segment>
        </Column>
        <Column width={6}>
          <Segment>{image}</Segment>
        </Column>
        <Column>
          <Segment>1</Segment>
          <Segment>2</Segment>
        </Column>
      </Row>
      <Row>
        <Column>
          <Segment>1</Segment>
          <Segment>2</Segment>
        </Column>
        <Column width={6}>
          <Segment>{image}</Segment>
        </Column>
        <Column>
          <Segment>1</Segment>
          <Segment>2</Segment>
        </Column>
      </Row>
    </Grid>
  </div>
)

export default GridStretchedExamples
