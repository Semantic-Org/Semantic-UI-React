import React from 'react'
import { Divider, Grid } from 'stardust'

const { Column, Row } = Grid

const GridreversedExamples = () => (
  <div>
    <Grid reversed='computer' columns='equal'>
      <Row>
        <Column>Computer A Fourth</Column>
        <Column>Computer A Third</Column>
        <Column>Computer A Second</Column>
        <Column>Computer A First</Column>
      </Row>
      <Row>
        <Column>Computer B Fourth</Column>
        <Column>Computer B Third</Column>
        <Column>Computer B Second</Column>
        <Column>Computer B First</Column>
      </Row>
    </Grid>

    <Divider />

    <Grid reversed='tablet' columns='equal'>
      <Column>Tablet Fourth</Column>
      <Column>Tablet Third</Column>
      <Column>Tablet Second</Column>
      <Column>Tablet First</Column>
    </Grid>

    <Divider />

    <Grid reversed='mobile' columns='equal'>
      <Column>Mobile Fourth</Column>
      <Column>Mobile Third</Column>
      <Column>Mobile Second</Column>
      <Column>Mobile First</Column>
    </Grid>

    <Divider />

    <Grid reversed='computer vertically'>
      <Row>
        <Column>Computer Row 4</Column>
      </Row>
      <Row>
        <Column>Computer Row 3</Column>
      </Row>
      <Row>
        <Column>Computer Row 2</Column>
      </Row>
      <Row>
        <Column>Computer Row 1</Column>
      </Row>
    </Grid>

    <Divider />

    <Grid reversed='tablet vertically'>
      <Row>
        <Column>Tablet Row 4</Column>
      </Row>
      <Row>
        <Column>Tablet Row 3</Column>
      </Row>
      <Row>
        <Column>Tablet Row 2</Column>
      </Row>
      <Row>
        <Column>Tablet Row 1</Column>
      </Row>
    </Grid>

    <Divider />

    <Grid reversed='mobile vertically'>
      <Row>
        <Column>Mobile Row 4</Column>
      </Row>
      <Row>
        <Column>Mobile Row 3</Column>
      </Row>
      <Row>
        <Column>Mobile Row 2</Column>
      </Row>
      <Row>
        <Column>Mobile Row 1</Column>
      </Row>
    </Grid>
  </div>
)

export default GridreversedExamples
