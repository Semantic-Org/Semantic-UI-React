import React from 'react'
import { Divider, Image, Grid } from 'stardust'

const { Column } = Grid
const image = <Image src='http://semantic-ui.com/images/wireframe/paragraph.png' />

const GridPaddedExamples = () => (
  <div>

    <p>The following grid has vertical and horizontal gutters</p>
    <Divider />

    <Grid column={2} padded>
      <Column>{image}</Column>
      <Column>{image}</Column>
    </Grid>

    <p>The following grid has vertical gutters</p>
    <Divider />

    <Grid column={2} padded='vertically'>
      <Column>{image}</Column>
      <Column>{image}</Column>
    </Grid>

    <p>The following grid has horizontal gutters</p>
    <Divider />

    <Grid column={2} padded='horizontally'>
      <Column>{image}</Column>
      <Column>{image}</Column>
    </Grid>
  </div>
)

export default GridPaddedExamples
