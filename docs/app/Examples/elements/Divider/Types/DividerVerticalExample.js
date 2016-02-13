import React, { Component } from 'react'
import { Grid, Segment, Divider } from 'stardust'

export default class DividerVerticalExample extends Component {
  render() {
    return (
      <Grid className='three column relaxed'>
        <Grid.Column>
          <Segment className='basic'>
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio.
          </Segment>
        </Grid.Column>
        <Divider className='vertical'>Or</Divider>
        <Grid.Column>
          <Segment className='basic'>
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio.
          </Segment>
        </Grid.Column>
        <Divider className='vertical'>And</Divider>
        <Grid.Column>
          <Segment className='basic'>
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio.
          </Segment>
        </Grid.Column>
      </Grid>
    )
  }
}
