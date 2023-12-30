import React from 'react'
import { GridRow, GridColumn, Grid, Image } from 'semantic-ui-react'

const GridExampleRows = () => (
  <Grid columns={3}>
    <GridRow>
      <GridColumn>
        <Image src='/images/wireframe/paragraph.png' />
      </GridColumn>
      <GridColumn>
        <Image src='/images/wireframe/paragraph.png' />
      </GridColumn>
    </GridRow>

    <GridRow>
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

export default GridExampleRows
