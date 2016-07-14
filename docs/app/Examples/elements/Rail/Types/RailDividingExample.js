import React from 'react'
import { Grid, Rail, Segment } from 'stardust'

const RailDividingExample = () => (
  <Grid className='three column'>
    <Grid.Column className='centered'>
      <Segment>
        <Rail dividing position='left'>
          <Segment>Left Rail Content</Segment>
        </Rail>

        <Rail dividing position='right'>
          <Segment>Right Rail Content</Segment>
        </Rail>

        Segment content
      </Segment>
    </Grid.Column>
  </Grid>
)

export default RailDividingExample
