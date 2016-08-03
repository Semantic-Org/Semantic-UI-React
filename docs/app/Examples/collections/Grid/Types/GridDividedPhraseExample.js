import React from 'react'
import { Image, Grid } from 'stardust'

const image = <Image src='http://semantic-ui.com/images/wireframe/media-paragraph.png' />

const GridDividedExample = () => (
  <Grid columns='three' divided>
    <Grid.Row>
      <Grid.Column>{image}</Grid.Column>
      <Grid.Column>{image}</Grid.Column>
      <Grid.Column>{image}</Grid.Column>
    </Grid.Row>

    <Grid.Row>
      <Grid.Column>{image}</Grid.Column>
      <Grid.Column>{image}</Grid.Column>
      <Grid.Column>{image}</Grid.Column>
    </Grid.Row>
  </Grid>
)

export default GridDividedExample
