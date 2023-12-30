import React from 'react'
import { GridRow, GridColumn, Grid, Image, Segment } from 'semantic-ui-react'

const GridExampleStretchedEqual = () => (
  <Grid columns='equal'>
    <GridRow stretched>
      <GridColumn>
        <Segment>1</Segment>
        <Segment>2</Segment>
      </GridColumn>
      <GridColumn width={6}>
        <Segment>
          <Image src='/images/wireframe/paragraph.png' />
        </Segment>
      </GridColumn>
      <GridColumn>
        <Segment>1</Segment>
        <Segment>2</Segment>
      </GridColumn>
    </GridRow>
    <GridRow>
      <GridColumn>
        <Segment>1</Segment>
        <Segment>2</Segment>
      </GridColumn>
      <GridColumn width={6}>
        <Segment>
          <Image src='/images/wireframe/paragraph.png' />
        </Segment>
      </GridColumn>
      <GridColumn>
        <Segment>1</Segment>
        <Segment>2</Segment>
      </GridColumn>
    </GridRow>
  </Grid>
)

export default GridExampleStretchedEqual
