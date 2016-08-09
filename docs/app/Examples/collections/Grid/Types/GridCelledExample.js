import React from 'react'
import { Image, Grid } from 'stardust'

const image = <Image src='http://semantic-ui.com/images/wireframe/image.png' />

const GridCelledExample = () => (
  <Grid celled>
    <Grid.Row>
      <Grid.Column width={3}>{image}</Grid.Column>
      <Grid.Column width='thirteen'>
        <Image src='http://semantic-ui.com/images/wireframe/centered-paragraph.png' />
      </Grid.Column>
    </Grid.Row>

    <Grid.Row>
      <Grid.Column width={3}>{image}</Grid.Column>
      <Grid.Column width='ten'><Image src='http://semantic-ui.com/images/wireframe/paragraph.png' /></Grid.Column>
      <Grid.Column width={3}>{image}</Grid.Column>
    </Grid.Row>
  </Grid>
)

export default GridCelledExample
