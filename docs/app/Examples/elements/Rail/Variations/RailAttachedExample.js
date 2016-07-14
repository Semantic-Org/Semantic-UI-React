import React from 'react'
import { Grid, Rail, Segment } from 'stardust'

const RailAttachedExample = () => (
      <Grid className='three column'>
        <Grid.Column className='centered'>
          <Segment className='center aligned'>
            <Rail attached position='left'>
              <Segment>Left Rail Content</Segment>
            </Rail>

            <Rail attached position='right'>
              <Segment>Right Rail Content</Segment>
            </Rail>

            Segment content
          </Segment>
        </Grid.Column>
      </Grid>
    )

export default RailAttachedExample
