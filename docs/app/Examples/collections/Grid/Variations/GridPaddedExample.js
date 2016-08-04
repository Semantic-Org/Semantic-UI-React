import React from 'react'
import { Image, Grid } from 'stardust'

const { Column } = Grid
const image = <Image src='http://semantic-ui.com/images/wireframe/paragraph.png' />

const GridPaddedExample = () => (
  <div>
    <p>The following grid has vertical and horizontal gutters</p>

    <Grid columns={2} padded>
      <Column>{image}</Column>
      <Column>{image}</Column>
    </Grid>
  </div>
)

export default GridPaddedExample
