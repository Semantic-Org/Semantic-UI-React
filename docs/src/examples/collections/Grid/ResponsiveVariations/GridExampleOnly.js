import React from 'react'
import { GridRow, GridColumn, Grid, Segment } from 'semantic-ui-react'

const GridExampleOnly = () => (
  <Grid>
    <GridRow columns={2} only='large screen'>
      <GridColumn>
        <Segment>Large Screen</Segment>
      </GridColumn>
      <GridColumn>
        <Segment>Large Screen</Segment>
      </GridColumn>
    </GridRow>
    <GridRow columns={2} only='widescreen'>
      <GridColumn>
        <Segment>Widescreen</Segment>
      </GridColumn>
      <GridColumn>
        <Segment>Widescreen</Segment>
      </GridColumn>
    </GridRow>
    <GridRow columns={2} only='mobile'>
      <GridColumn>
        <Segment>Mobile</Segment>
      </GridColumn>
      <GridColumn>
        <Segment>Mobile</Segment>
      </GridColumn>
    </GridRow>
    <GridRow columns={3}>
      <GridColumn only='computer'>
        <Segment>Computer</Segment>
      </GridColumn>
      <GridColumn only='tablet mobile'>
        <Segment>Tablet and Mobile</Segment>
      </GridColumn>
      <GridColumn>
        <Segment>All Sizes</Segment>
      </GridColumn>
      <GridColumn>
        <Segment>All Sizes</Segment>
      </GridColumn>
    </GridRow>
    <GridRow columns={4} only='computer'>
      <GridColumn>
        <Segment>Computer</Segment>
      </GridColumn>
      <GridColumn>
        <Segment>Computer</Segment>
      </GridColumn>
      <GridColumn>
        <Segment>Computer</Segment>
      </GridColumn>
      <GridColumn>
        <Segment>Computer</Segment>
      </GridColumn>
    </GridRow>
    <GridRow columns={3} only='tablet'>
      <GridColumn>
        <Segment>Tablet</Segment>
      </GridColumn>
      <GridColumn>
        <Segment>Tablet</Segment>
      </GridColumn>
      <GridColumn>
        <Segment>Tablet</Segment>
      </GridColumn>
    </GridRow>
  </Grid>
)

export default GridExampleOnly
