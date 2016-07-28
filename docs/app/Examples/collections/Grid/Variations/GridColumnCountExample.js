import React from 'react'
import { Image, Grid } from 'stardust'

const { Column, Row } = Grid
const image = <Image src='http://semantic-ui.com/images/wireframe/image.png' />

const GridColumnCountExample = () => (
  <Grid>
    <Row column={3}>
      <Column>{image}</Column>
      <Column>{image}</Column>
      <Column>{image}</Column>
    </Row>

    <Row column={4}>
      <Column>{image}</Column>
      <Column>{image}</Column>
      <Column>{image}</Column>
      <Column>{image}</Column>
    </Row>

    <Row column={5}>
      <Column>{image}</Column>
      <Column>{image}</Column>
      <Column>{image}</Column>
      <Column>{image}</Column>
      <Column>{image}</Column>
    </Row>
  </Grid>
)

export default GridColumnCountExample
