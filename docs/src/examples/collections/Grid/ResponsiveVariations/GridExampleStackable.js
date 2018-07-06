import React from 'react'
import { Grid, Image, Segment } from 'semantic-ui-react'

const GridExampleStackable = () => (
  <Grid stackable columns={2}>
    <Grid.Column>
      <Segment>
        <Image src='/images/wireframe/paragraph.png' />
      </Segment>
    </Grid.Column>
    <Grid.Column>
      <Segment>
        <Image src='/images/wireframe/paragraph.png' />
      </Segment>
    </Grid.Column>
  </Grid>
)

export default GridExampleStackable
