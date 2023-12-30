import React from 'react'
import { GridColumn, Grid, Image } from 'semantic-ui-react'

const GridExampleFloated = () => (
  <Grid>
    <GridColumn floated='left' width={5}>
      <Image src='/images/wireframe/paragraph.png' />
    </GridColumn>
    <GridColumn floated='right' width={5}>
      <Image src='/images/wireframe/paragraph.png' />
    </GridColumn>
  </Grid>
)

export default GridExampleFloated
