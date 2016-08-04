import React from 'react'
import { Grid, Segment } from 'stardust'

const { Column, Row } = Grid

const GridStretchedExample = () => (
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
)

export default GridStretchedExample
