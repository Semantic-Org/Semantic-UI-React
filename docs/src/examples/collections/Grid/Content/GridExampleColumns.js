import React from 'react'
import { Grid, Image } from 'semantic-ui-react'

const GridExampleColumns = () => (
  <Grid>
    <Grid.Row>
      <Grid.Column width={8}>
        <Image src='/images/wireframe/paragraph.png' />
      </Grid.Column>
      <Grid.Column width={8}>
        <Image src='/images/wireframe/paragraph.png' />
      </Grid.Column>
    </Grid.Row>

    <Grid.Row>
      <Grid.Column width={8}>
        <Image src='/images/wireframe/paragraph.png' />
      </Grid.Column>
      <Grid.Column width={8}>
        <Image src='/images/wireframe/paragraph.png' />
      </Grid.Column>
    </Grid.Row>
  </Grid>
)

export default GridExampleColumns
