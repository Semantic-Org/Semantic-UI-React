import React from 'react'
import { Grid, Image, Rail, Segment } from 'semantic-ui-react'

const RailExampleClose = () => (
  <Grid centered columns={3}>
    <Grid.Column>
      <Segment>
        <Image src='/images/wireframe/paragraph.png' />

        <Rail close position='left'>
          <Segment>Left Rail Content</Segment>
        </Rail>

        <Rail close position='right'>
          <Segment>Right Rail Content</Segment>
        </Rail>
      </Segment>
    </Grid.Column>
  </Grid>
)

export default RailExampleClose
