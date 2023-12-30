import React from 'react'
import { GridColumn, Grid, Image } from 'semantic-ui-react'

const GridExampleRelaxedVery = () => (
  <Grid relaxed='very' columns={4}>
    <GridColumn>
      <Image src='/images/wireframe/image.png' />
    </GridColumn>
    <GridColumn>
      <Image src='/images/wireframe/image.png' />
    </GridColumn>
    <GridColumn>
      <Image src='/images/wireframe/image.png' />
    </GridColumn>
    <GridColumn>
      <Image src='/images/wireframe/image.png' />
    </GridColumn>
  </Grid>
)

export default GridExampleRelaxedVery
