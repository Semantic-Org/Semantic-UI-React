import React from 'react'
import { Image, Grid, Rail, Segment } from 'stardust'

const RailVeryCloseExample = () => (
  <Grid columns={3}>
    <Grid.Column centered>
      <Segment>
        <Image src='http://semantic-ui.com/images/wireframe/paragraph.png' />

        <Rail close='very' position='left'>
          <Segment>Left Rail Content</Segment>
        </Rail>

        <Rail close='very' position='right'>
          <Segment>Right Rail Content</Segment>
        </Rail>
      </Segment>
    </Grid.Column>
  </Grid>
)

export default RailVeryCloseExample
