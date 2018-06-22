import React from 'react'
import { Grid, Image, Rail, Segment } from 'semantic-ui-react'

const RailExampleAttached = () => (
  <Grid centered columns={3}>
    <Grid.Column>
      <Segment textAlign='center'>
        <Image src='/images/wireframe/paragraph.png' />

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
