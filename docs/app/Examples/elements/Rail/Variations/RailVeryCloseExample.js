import React from 'react'
import { Grid, Rail, Segment } from 'stardust'

const RailVeryCloseExample = () => (
  <Grid className='three column'>
    <Grid.Column className='centered'>
      <Segment>
        <Rail close='very' position='left'>
          <Segment>Left Rail Content</Segment>
        </Rail>

        <Rail close='very' position='right'>
          <Segment>Right Rail Content</Segment>
        </Rail>

        Segment content
      </Segment>
    </Grid.Column>
  </Grid>
)

export default RailVeryCloseExample
