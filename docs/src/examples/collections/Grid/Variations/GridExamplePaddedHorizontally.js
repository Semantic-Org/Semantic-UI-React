import React from 'react'
import { Grid, Image } from 'semantic-ui-react'

const GridExamplePaddedHorizontally = () => (
  <div>
    <p>The following grid has horizontal gutters.</p>

    <Grid columns={2} padded='horizontally'>
      <Grid.Column>
        <Image src='/images/wireframe/paragraph.png' />
      </Grid.Column>
      <Grid.Column>
        <Image src='/images/wireframe/paragraph.png' />
      </Grid.Column>
    </Grid>
  </div>
)

export default GridExamplePaddedHorizontally
