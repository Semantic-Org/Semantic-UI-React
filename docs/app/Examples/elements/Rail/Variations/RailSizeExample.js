import React from 'react'
import { Grid, Rail, Segment } from 'stardust'

const RailSizeExample = () => (
      <Grid className='three column'>
        <Grid.Column className='centered'>
          <Segment>
            <Rail size='mini' position='left'>
              <Segment>Left Rail Content</Segment>
            </Rail>

            <Rail size='mini' position='right'>
              <Segment>Right Rail Content</Segment>
            </Rail>

            Segment content
          </Segment>
        </Grid.Column>
      </Grid>
    )

export default RailSizeExample
