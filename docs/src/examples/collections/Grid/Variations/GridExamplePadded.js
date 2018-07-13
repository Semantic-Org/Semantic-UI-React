import React from 'react'
import { Grid, Image } from 'semantic-ui-react'

const GridExamplePadded = () => (
  <div>
    <p>The following grid has vertical and horizontal gutters.</p>

    <Grid columns={2} padded>
      <Grid.Column>
        <Image src='/images/wireframe/paragraph.png' />
      </Grid.Column>
      <Grid.Column>
        <Image src='/images/wireframe/paragraph.png' />
      </Grid.Column>
    </Grid>
  </div>
)

export default GridExamplePadded
