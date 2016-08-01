import React from 'react'
import { Divider, Grid, Segment } from 'stardust'

const { Column, Row } = Grid

const GridEqualWidthExamples = () => (
  <div>
    <Grid width='equal'>
      <Column>
        <Segment>1</Segment>
      </Column>
      <Column width={8}>
        <Segment>2</Segment>
      </Column>
      <Column>
        <Segment>3</Segment>
      </Column>
    </Grid>

    <Divider />

    <Grid width='equal'>
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
  </div>
)

export default GridEqualWidthExamples
