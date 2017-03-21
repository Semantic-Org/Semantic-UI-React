import React from 'react'
import { Grid, Image } from 'semantic-ui-react'

const GridExampleColumnWidth = () => (
  <Grid>
    <Grid.Column width={4}>
      <Image src='/assets/images/wireframe/image.png' />
    </Grid.Column>
    <Grid.Column width={9}>
      <Image src='/assets/images/wireframe/paragraph.png' />
    </Grid.Column>
    <Grid.Column width={3}>
      <Image src='/assets/images/wireframe/media-paragraph.png' />
    </Grid.Column>
  </Grid>
)

export default GridExampleColumnWidth
