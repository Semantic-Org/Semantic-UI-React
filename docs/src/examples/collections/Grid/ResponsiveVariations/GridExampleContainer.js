import React from 'react'
import { GridColumn, Grid, Image } from 'semantic-ui-react'

const GridExampleContainer = () => (
  <Grid container columns={3}>
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

export default GridExampleContainer
