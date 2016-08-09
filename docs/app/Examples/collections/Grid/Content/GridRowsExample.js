import React from 'react'
import { Image, Grid } from 'stardust'

const image = <Image src='http://semantic-ui.com/images/wireframe/paragraph.png' />

const GridRowsExample = () => (
  <Grid columns={3}>
    <Grid.Row>
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

export default GridRowsExample
