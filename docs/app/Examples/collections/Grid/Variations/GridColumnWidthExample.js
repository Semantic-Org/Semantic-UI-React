import React from 'react'
import { Image, Grid } from 'stardust'

const GridColumnWidthExample = () => (
  <Grid>
    <Grid.Column width={4}>
      <Image src='http://semantic-ui.com/images/wireframe/image.png' />
    </Grid.Column>
    <Grid.Column width={9}>
      <Image src='http://semantic-ui.com/images/wireframe/paragraph.png' />
    </Grid.Column>
    <Grid.Column width={3}>
      <Image src='http://semantic-ui.com/images/wireframe/media-paragraph.png' />
    </Grid.Column>
  </Grid>
)

export default GridColumnWidthExample
