import React from 'react'
import { Image, Grid, Rail, Segment } from 'stardust'

const RailExample = () => (
  <Grid className='three column'>
    <Grid.Column className='centered'>
      <Segment>
        <Image src='http://semantic-ui.com/images/wireframe/paragraph.png' />

        <Rail position='left'>
          <Segment>Left Rail Content</Segment>
        </Rail>

        <Rail position='right'>
          <Segment>Right Rail Content</Segment>
        </Rail>
      </Segment>
    </Grid.Column>
  </Grid>
)

export default RailExample
