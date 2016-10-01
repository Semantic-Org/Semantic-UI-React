import React from 'react'

import { Image, Grid, Rail, Segment } from 'stardust'

const RailExampleAttached = () => (
  <Grid columns={3}>
    <Grid.Column>
      <Segment textAlign='center'>
        <Image src='http://semantic-ui.com/images/wireframe/paragraph.png' />

        <Rail attached position='left'>
          <Segment>Left Rail Content</Segment>
        </Rail>

        <Rail attached position='right'>
          <Segment>Right Rail Content</Segment>
        </Rail>
      </Segment>
    </Grid.Column>
  </Grid>
)

export default RailExampleAttached
