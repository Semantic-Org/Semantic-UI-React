import React from 'react'
import { Grid, Rail, Segment } from 'stardust'

const RailExample = () => (
  <Grid className='three column'>
    <Grid.Column className='centered'>
      <Segment>
        <Rail position='left'>
          <Segment>Left Rail Content</Segment>
        </Rail>

        <Rail position='right'>
          <Segment>Right Rail Content</Segment>
        </Rail>

        Segment content
      </Segment>
    </Grid.Column>
  </Grid>
)

export default RailExample
