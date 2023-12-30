import React from 'react'
import { GridRow, GridColumn, Grid } from 'semantic-ui-react'

const GridExampleReversedComputerVertically = () => (
  <Grid reversed='computer vertically'>
    <GridRow>
      <GridColumn>Computer Row 4</GridColumn>
    </GridRow>
    <GridRow>
      <GridColumn>Computer Row 3</GridColumn>
    </GridRow>
    <GridRow>
      <GridColumn>Computer Row 2</GridColumn>
    </GridRow>
    <GridRow>
      <GridColumn>Computer Row 1</GridColumn>
    </GridRow>
  </Grid>
)

export default GridExampleReversedComputerVertically
