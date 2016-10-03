import React from 'react'
import { Image, Grid } from 'semantic-ui-react'

const { Column, Row } = Grid
const image = <Image src='http://semantic-ui.com/images/wireframe/image.png' />

const GridCenteredExample = () => (
  <Grid centered columns={2}>
    <Column>{image}</Column>

    <Row centered columns={4}>
      <Column>{image}</Column>
      <Column>{image}</Column>
      <Column>{image}</Column>
    </Row>

    <Row centered columns={4}>
      <Column>{image}</Column>
      <Column>{image}</Column>
      <Column>{image}</Column>
      <Column>{image}</Column>
    </Row>
  </Grid>
)

export default GridCenteredExample
