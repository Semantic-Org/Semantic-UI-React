import React from 'react'
import { Image, Grid } from 'stardust'

const image = <Image src='http://semantic-ui.com/images/wireframe/image.png' />

const GridInternallyCelledExample = () => (
  <Grid celled='internally'>
    <Grid.Row>
      <Grid.Column width='three'>{image}</Grid.Column>
      <Grid.Column width={10}>
        <Image src='http://semantic-ui.com/images/wireframe/centered-paragraph.png' />
      </Grid.Column>
      <Grid.Column width='three'>{image}</Grid.Column>
    </Grid.Row>

    <Grid.Row>
      <Grid.Column width={3}>{image}</Grid.Column>
      <Grid.Column width='ten'><Image src='http://semantic-ui.com/images/wireframe/paragraph.png' /></Grid.Column>
      <Grid.Column width={3}>{image}</Grid.Column>
    </Grid.Row>
  </Grid>
)

export default GridInternallyCelledExample
