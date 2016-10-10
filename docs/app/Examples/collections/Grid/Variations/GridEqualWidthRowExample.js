import React from 'react'
import { Grid, Segment } from 'semantic-ui-react'

const { Column, Row } = Grid

const GridEqualWidthRowExample = () => (
  <Grid columns='equal'>
    <Row>
      <Column>
        <Segment>1</Segment>
      </Column>
      <Column>
        <Segment>2</Segment>
      </Column>
      <Column>
        <Segment>3</Segment>
      </Column>
      <Column>
        <Segment>4</Segment>
      </Column>
    </Row>
    <Row>
      <Column>
        <Segment>1</Segment>
      </Column>
      <Column>
        <Segment>2</Segment>
      </Column>
      <Column>
        <Segment>3</Segment>
      </Column>
    </Row>
    <Row>
      <Column>
        <Segment>1</Segment>
      </Column>
      <Column>
        <Segment>2</Segment>
      </Column>
    </Row>
  </Grid>
)

export default GridEqualWidthRowExample
