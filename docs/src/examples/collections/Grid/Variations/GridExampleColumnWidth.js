import React from 'react'
import { GridColumn, Grid, Image } from 'semantic-ui-react'

const GridExampleColumnWidth = () => (
  <Grid>
    <GridColumn width={4}>
      <Image src='/images/wireframe/image.png' />
    </GridColumn>
    <GridColumn width={9}>
      <Image src='/images/wireframe/paragraph.png' />
    </GridColumn>
    <GridColumn width={3}>
      <Image src='/images/wireframe/media-paragraph.png' />
    </GridColumn>
  </Grid>
)

export default GridExampleColumnWidth
