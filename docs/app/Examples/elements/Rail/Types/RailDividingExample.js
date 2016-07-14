import React, { Component } from 'react'
import { Grid, Rail, Segment } from 'stardust'

export default class RailDividingExample extends Component {
  render() {
    return (
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
  }
}
