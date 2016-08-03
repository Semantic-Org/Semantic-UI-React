import React from 'react'
import { Grid } from 'stardust'

const { Column, Row } = Grid

const GridReversedTabletVerticallyExample = () => (
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
)

export default GridReversedTabletVerticallyExample
