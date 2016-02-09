import React, { Component } from 'react'
import { Grid, Column, Segment, Divider } from 'stardust'

export default class DividerVerticalExample extends Component {
  render() {
    return (
      <Grid className='three column relaxed'>
        <Column>
          <Segment className='basic'>
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio.
          </Segment>
        </Column>
        <Divider className='vertical'>Or</Divider>
        <Column>
          <Segment className='basic'>
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio.
          </Segment>
        </Column>
        <Divider className='vertical'>And</Divider>
        <Column>
          <Segment className='basic'>
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio.
          </Segment>
        </Column>
      </Grid>
    )
  }
}
