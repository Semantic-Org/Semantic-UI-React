import React from 'react'
import { Image, Grid, Segment } from 'semantic-ui-react'

const { Column, Row } = Grid
const image = <Image src='http://semantic-ui.com/images/wireframe/paragraph.png' />

const GridStretchedEqualExample = () => (
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
)

export default GridStretchedEqualExample
