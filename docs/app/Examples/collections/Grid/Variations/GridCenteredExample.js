import React from 'react'
import { Image, Grid } from 'stardust'

const { Column, Row } = Grid
const image = <Image src='http://semantic-ui.com/images/wireframe/image.png' />

const GridCenteredExample = () => (
  <Grid centered column={2}>
    <Column>{image}</Column>

    <Row centered column={4}>
      <Column>{image}</Column>
      <Column>{image}</Column>
      <Column>{image}</Column>
    </Row>

    <Row centered column={4}>
      <Column>{image}</Column>
      <Column>{image}</Column>
      <Column>{image}</Column>
      <Column>{image}</Column>
    </Row>
  </Grid>
)

export default GridCenteredExample
