import React from 'react'
import { GridRow, GridColumn, Grid, Segment } from 'semantic-ui-react'

const GridExampleEqualWidthRow = () => (
  <Grid columns='equal'>
    <GridRow>
      <GridColumn>
        <Segment>1</Segment>
      </GridColumn>
      <GridColumn>
        <Segment>2</Segment>
      </GridColumn>
      <GridColumn>
        <Segment>3</Segment>
      </GridColumn>
      <GridColumn>
        <Segment>4</Segment>
      </GridColumn>
    </GridRow>
    <GridRow>
      <GridColumn>
        <Segment>1</Segment>
      </GridColumn>
      <GridColumn>
        <Segment>2</Segment>
      </GridColumn>
      <GridColumn>
        <Segment>3</Segment>
      </GridColumn>
    </GridRow>
    <GridRow>
      <GridColumn>
        <Segment>1</Segment>
      </GridColumn>
      <GridColumn>
        <Segment>2</Segment>
      </GridColumn>
    </GridRow>
  </Grid>
)

export default GridExampleEqualWidthRow
