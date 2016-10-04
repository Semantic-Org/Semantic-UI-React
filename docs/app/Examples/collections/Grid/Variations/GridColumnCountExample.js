import React from 'react'
import { Image, Grid } from 'semantic-ui-react'

const { Column, Row } = Grid
const image = <Image src='http://semantic-ui.com/images/wireframe/image.png' />

const GridColumnCountExample = () => (
  <Grid>
    <Row columns={3}>
      <Column>{image}</Column>
      <Column>{image}</Column>
      <Column>{image}</Column>
    </Row>

    <Row columns={4}>
      <Column>{image}</Column>
      <Column>{image}</Column>
      <Column>{image}</Column>
      <Column>{image}</Column>
    </Row>

    <Row columns={5}>
      <Column>{image}</Column>
      <Column>{image}</Column>
      <Column>{image}</Column>
      <Column>{image}</Column>
      <Column>{image}</Column>
    </Row>
  </Grid>
)

export default GridColumnCountExample
