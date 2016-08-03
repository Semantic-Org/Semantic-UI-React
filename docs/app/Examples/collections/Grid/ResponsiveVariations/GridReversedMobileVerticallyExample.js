import React from 'react'
import { Grid } from 'stardust'

const { Column, Row } = Grid

const GridReversedMobileVerticallyExample = () => (
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
)

export default GridReversedMobileVerticallyExample
