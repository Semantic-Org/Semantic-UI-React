import React, { Component } from 'react'
import { Grid, Rail, Segment } from 'stardust'

export default class RailCloseExample extends Component {
  render() {
    return (
      <Grid className='three column'>
        <Grid.Column className='centered'>
          <Segment>
            <Rail close position='left'>
              <Segment>Left Rail Content</Segment>
            </Rail>

            <Rail close position='right'>
              <Segment>Right Rail Content</Segment>
            </Rail>

            Segment content
          </Segment>
        </Grid.Column>
      </Grid>
    )
  }
}
