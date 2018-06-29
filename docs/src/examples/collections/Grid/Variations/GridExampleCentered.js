import React from 'react'
import { Grid, Image } from 'semantic-ui-react'

const GridExampleCentered = () => (
  <Grid centered columns={2}>
    <Grid.Column>
      <Image src='/images/wireframe/image.png' />
    </Grid.Column>

    <Grid.Row centered columns={4}>
      <Grid.Column>
        <Image src='/images/wireframe/image.png' />
      </Grid.Column>
      <Grid.Column>
        <Image src='/images/wireframe/image.png' />
      </Grid.Column>
      <Grid.Column>
        <Image src='/images/wireframe/image.png' />
      </Grid.Column>
    </Grid.Row>

    <Grid.Row centered columns={4}>
      <Grid.Column>
        <Image src='/images/wireframe/image.png' />
      </Grid.Column>
      <Grid.Column>
        <Image src='/images/wireframe/image.png' />
      </Grid.Column>
      <Grid.Column>
        <Image src='/images/wireframe/image.png' />
      </Grid.Column>
      <Grid.Column>
        <Image src='/images/wireframe/image.png' />
      </Grid.Column>
    </Grid.Row>
  </Grid>
)

export default GridExampleCentered
