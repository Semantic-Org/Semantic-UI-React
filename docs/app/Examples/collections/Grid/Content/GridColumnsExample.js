import React from 'react'
import { Image, Grid } from 'stardust'

const image = <Image src='http://semantic-ui.com/images/wireframe/paragraph.png' />

const GridColumnsExample = () => (
  <Grid>
    <Grid.Row>
      <Grid.Column width='eight'>{image}</Grid.Column>
      <Grid.Column width={8}>{image}</Grid.Column>
    </Grid.Row>

    <Grid.Row>
      <Grid.Column width='eight'>{image}</Grid.Column>
      <Grid.Column width={8}>{image}</Grid.Column>
    </Grid.Row>
  </Grid>
)

export default GridColumnsExample
