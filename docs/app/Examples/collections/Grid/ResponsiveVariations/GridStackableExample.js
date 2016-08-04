import React from 'react'
import { Image, Grid, Segment } from 'stardust'

const { Column } = Grid
const image = <Image src='http://semantic-ui.com/images/wireframe/paragraph.png' />

const GridStackableExample = () => (
  <Grid stackable columns={2}>
    <Column>
      <Segment>{image}</Segment>
    </Column>
    <Column>
      <Segment>{image}</Segment>
    </Column>
  </Grid>
)

export default GridStackableExample
