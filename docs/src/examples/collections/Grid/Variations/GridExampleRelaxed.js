import React from 'react'
import { GridColumn, Grid, Image } from 'semantic-ui-react'

const GridExampleRelaxed = () => (
  <Grid relaxed columns={4}>
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

export default GridExampleRelaxed
