import React from 'react'
import { Image, Grid } from 'semantic-ui-react'

const image = <Image src='http://semantic-ui.com/images/wireframe/paragraph.png' />

const GridFloatedExample = () => (
  <Grid>
    <Grid.Column floated='left' width='five'>{image}</Grid.Column>
    <Grid.Column floated='right' width={5}>{image}</Grid.Column>
  </Grid>
)

export default GridFloatedExample
