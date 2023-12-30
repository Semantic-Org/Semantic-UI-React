import React from 'react'
import { GridRow, GridColumn, Grid, Segment } from 'semantic-ui-react'

const GridExampleOnlyMultiple = () => (
  <Grid>
    <GridRow columns={2} only='mobile tablet'>
      <GridColumn>
        <Segment>Mobile</Segment>
      </GridColumn>
      <GridColumn>
        <Segment>Tablet</Segment>
      </GridColumn>
    </GridRow>

    <GridRow columns={2} only='tablet computer'>
      <GridColumn>
        <Segment>Tablet</Segment>
      </GridColumn>
      <GridColumn>
        <Segment>Computer</Segment>
      </GridColumn>
    </GridRow>

    <GridRow columns={2} only='large screen widescreen'>
      <GridColumn>
        <Segment>Large Screen</Segment>
      </GridColumn>
      <GridColumn>
        <Segment>Widescreen</Segment>
      </GridColumn>
    </GridRow>
  </Grid>
)

export default GridExampleOnlyMultiple
