import React from 'react'
import { Grid, Image } from 'semantic-ui-react'

const GridExampleVerticalAlignment = () => (
  <Grid verticalAlign='middle' columns={4} centered>
    <Grid.Row>
      <Grid.Column>
        <Image src='/images/wireframe/image.png' />
      </Grid.Column>
      <Grid.Column>
        <Image src='/images/wireframe/image.png' />
        <br />
        <Image src='/images/wireframe/image.png' />
      </Grid.Column>
      <Grid.Column>
        <Image src='/images/wireframe/image.png' />
      </Grid.Column>
    </Grid.Row>
  </Grid>
)

export default GridExampleVerticalAlignment
