import React from 'react'
import { Image, Grid } from 'semantic-ui-react'

const { Column } = Grid
const image = <Image src='http://semantic-ui.com/images/wireframe/paragraph.png' />

const GridPaddedHorizontallyExample = () => (
  <div>
    <p>The following grid has horizontal gutters</p>

    <Grid columns={2} padded='horizontally'>
      <Column>{image}</Column>
      <Column>{image}</Column>
    </Grid>
  </div>
)

export default GridPaddedHorizontallyExample
