import React from 'react'
import { Grid, Image } from 'semantic-ui-react'

const GridExampleFloated = () => (
  <Grid>
    <Grid.Column floated='left' width={5}>
      <Image src='/images/wireframe/paragraph.png' />
    </Grid.Column>
    <Grid.Column floated='right' width={5}>
      <Image src='/images/wireframe/paragraph.png' />
    </Grid.Column>
  </Grid>
)

export default GridExampleFloated
