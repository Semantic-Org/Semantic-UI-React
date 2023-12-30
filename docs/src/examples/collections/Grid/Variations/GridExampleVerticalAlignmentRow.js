import React from 'react'
import { GridRow, GridColumn, Grid, Image } from 'semantic-ui-react'

const GridExampleVerticalAlignmentRow = () => (
  <Grid columns={4} centered>
    <GridRow verticalAlign='top'>
      <GridColumn>
        <Image src='/images/wireframe/image.png' />
      </GridColumn>
      <GridColumn>
        <Image src='/images/wireframe/image.png' />
        <br />
        <Image src='/images/wireframe/image.png' />
      </GridColumn>
      <GridColumn>
        <Image src='/images/wireframe/image.png' />
      </GridColumn>
    </GridRow>
    <GridRow verticalAlign='middle'>
      <GridColumn>
        <Image src='/images/wireframe/image.png' />
      </GridColumn>
      <GridColumn>
        <Image src='/images/wireframe/image.png' />
        <br />
        <Image src='/images/wireframe/image.png' />
      </GridColumn>
      <GridColumn>
        <Image src='/images/wireframe/image.png' />
      </GridColumn>
    </GridRow>
    <GridRow verticalAlign='bottom'>
      <GridColumn>
        <Image src='/images/wireframe/image.png' />
      </GridColumn>
      <GridColumn>
        <Image src='/images/wireframe/image.png' />
        <br />
        <Image src='/images/wireframe/image.png' />
      </GridColumn>
      <GridColumn>
        <Image src='/images/wireframe/image.png' />
      </GridColumn>
    </GridRow>
  </Grid>
)

export default GridExampleVerticalAlignmentRow
