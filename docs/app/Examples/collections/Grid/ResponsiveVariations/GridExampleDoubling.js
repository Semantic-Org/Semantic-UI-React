import React from 'react'
import { Grid, Image } from 'semantic-ui-react'

const GridExampleDoubling = () => (
  <Grid doubling columns={5}>
    <Grid.Column>
      <Image src='http://semantic-ui.com/images/wireframe/image.png' />
    </Grid.Column>
    <Grid.Column>
      <Image src='http://semantic-ui.com/images/wireframe/image.png' />
    </Grid.Column>
    <Grid.Column>
      <Image src='http://semantic-ui.com/images/wireframe/image.png' />
    </Grid.Column>
    <Grid.Column>
      <Image src='http://semantic-ui.com/images/wireframe/image.png' />
    </Grid.Column>
    <Grid.Column>
      <Image src='http://semantic-ui.com/images/wireframe/image.png' />
    </Grid.Column>
  </Grid>
)

export default GridExampleDoubling
