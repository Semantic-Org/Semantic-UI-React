import React, { Component } from 'react'
import { Header, Segment } from 'stardust'

export default class SegmentCircularExample extends Component {
  render() {
    return (
      <div>
        <Segment className='circular'>
          <Header as='h2'>
            Sale!
            <Header.Subheader>
              $10.99
            </Header.Subheader>
          </Header>
        </Segment>
        <Segment className='red inverted circular'>
          <Header as='h3'>
            Buy Now
            <Header.Subheader>
              $10.99
            </Header.Subheader>
          </Header>
        </Segment>
      </div>
    )
  }
}
