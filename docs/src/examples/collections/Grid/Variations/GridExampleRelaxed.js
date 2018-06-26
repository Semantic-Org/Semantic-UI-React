import React from 'react'
import { Grid, Image } from 'semantic-ui-react'

const GridExampleRelaxed = () => (
  <Grid relaxed columns={4}>
    <Grid.Column>
      <Image src='/images/wireframe/image.png' />
    </Grid.Column>
    <Grid.Column>
      <Image src='/images/wireframe/image.png' />
    </Grid.Column>
    <Grid.Column>
      <Image src='/images/wireframe/image.png' />
    </Grid.Column>
    <Grid.Column>
      <Image src='/images/wireframe/image.png' />
    </Grid.Column>
  </Grid>
)

export default GridExampleRelaxed
