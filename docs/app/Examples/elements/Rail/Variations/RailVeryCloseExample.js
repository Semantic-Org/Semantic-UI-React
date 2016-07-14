import React, { Component } from 'react'
import { Grid, Rail, Segment } from 'stardust'

export default class RailVeryCloseExample extends Component {
  render() {
    return (
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
  }
}
