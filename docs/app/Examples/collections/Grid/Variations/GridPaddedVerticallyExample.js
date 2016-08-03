import React from 'react'
import { Image, Grid } from 'stardust'

const { Column } = Grid
const image = <Image src='http://semantic-ui.com/images/wireframe/paragraph.png' />

const GridPaddedVerticallyExample = () => (
  <div>
    <p>The following grid has vertical gutters</p>

    <Grid columns={2} padded='vertically'>
      <Column>{image}</Column>
      <Column>{image}</Column>
    </Grid>
  </div>
)

export default GridPaddedVerticallyExample
