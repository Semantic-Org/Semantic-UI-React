import React from 'react'
import { Divider, Image, Grid } from 'stardust'

const image = <Image src='http://semantic-ui.com/images/wireframe/media-paragraph.png' />

const GridDividedExample = () => (
  <div>
    <Grid columns={3} divided>
      <Grid.Row>
        <Grid.Column>{image}</Grid.Column>
        <Grid.Column>{image}</Grid.Column>
        <Grid.Column>{image}</Grid.Column>
      </Grid.Row>

      <Grid.Row>
        <Grid.Column>{image}</Grid.Column>
        <Grid.Column>{image}</Grid.Column>
        <Grid.Column>{image}</Grid.Column>
      </Grid.Row>
    </Grid>

    <Divider />

    <Grid columns='three' divided>
      <Grid.Row>
        <Grid.Column>{image}</Grid.Column>
        <Grid.Column>{image}</Grid.Column>
        <Grid.Column>{image}</Grid.Column>
      </Grid.Row>

      <Grid.Row>
        <Grid.Column>{image}</Grid.Column>
        <Grid.Column>{image}</Grid.Column>
        <Grid.Column>{image}</Grid.Column>
      </Grid.Row>
    </Grid>
  </div>
)

export default GridDividedExample
