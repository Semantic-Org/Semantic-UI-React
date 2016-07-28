import React from 'react'
import { Image, Grid } from 'stardust'

const image = <Image src='http://semantic-ui.com/images/wireframe/paragraph.png' />

const GridVerticallyDividedExample = () => (
    <Grid divided='vertically' >
      <Grid.Row column={2}>
        <Grid.Column>{image}</Grid.Column>
        <Grid.Column>{image}</Grid.Column>
      </Grid.Row>

      <Grid.Row column={3}>
        <Grid.Column>{image}</Grid.Column>
        <Grid.Column>{image}</Grid.Column>
        <Grid.Column>{image}</Grid.Column>
      </Grid.Row>
    </Grid>
)

export default GridVerticallyDividedExample
