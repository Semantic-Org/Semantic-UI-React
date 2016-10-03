import React from 'react'
import { Grid } from 'semantic-ui-react'

const { Column, Row } = Grid

const GridReversedComputerVerticallyExample = () => (
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
)

export default GridReversedComputerVerticallyExample
