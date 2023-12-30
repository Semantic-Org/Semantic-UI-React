import React from 'react'
import { GridColumn, Grid, Image } from 'semantic-ui-react'

const GridExampleDoubling = () => (
  <Grid doubling columns={5}>
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
    <GridColumn>
      <Image src='/images/wireframe/image.png' />
    </GridColumn>
  </Grid>
)

export default GridExampleDoubling
