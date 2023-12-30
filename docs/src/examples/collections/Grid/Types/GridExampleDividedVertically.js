import React from 'react'
import { GridRow, GridColumn, Grid, Image } from 'semantic-ui-react'

const GridExampleVerticallyDivided = () => (
  <Grid divided='vertically'>
    <GridRow columns={2}>
      <GridColumn>
        <Image src='/images/wireframe/paragraph.png' />
      </GridColumn>
      <GridColumn>
        <Image src='/images/wireframe/paragraph.png' />
      </GridColumn>
    </GridRow>

    <GridRow columns={3}>
      <GridColumn>
        <Image src='/images/wireframe/paragraph.png' />
      </GridColumn>
      <GridColumn>
        <Image src='/images/wireframe/paragraph.png' />
      </GridColumn>
      <GridColumn>
        <Image src='/images/wireframe/paragraph.png' />
      </GridColumn>
    </GridRow>
  </Grid>
)

export default GridExampleVerticallyDivided
