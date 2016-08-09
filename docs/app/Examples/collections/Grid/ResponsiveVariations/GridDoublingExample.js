import React from 'react'
import { Image, Grid } from 'stardust'

const { Column } = Grid
const image = <Image src='http://semantic-ui.com/images/wireframe/image.png' />

const GridDoublingExample = () => (
  <Grid doubling columns={5}>
    <Column>{image}</Column>
    <Column>{image}</Column>
    <Column>{image}</Column>
    <Column>{image}</Column>
    <Column>{image}</Column>
  </Grid>
)

export default GridDoublingExample
