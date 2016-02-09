import React, { Component } from 'react'
import { Header, Segment } from 'stardust'

export default class SegmentCircularExample extends Component {
  render() {
    return (
      <div>
        <Segment className='circular'>
          <Header.H2>
            Sale!
            <Header.Subheader>
              $10.99
            </Header.Subheader>
          </Header.H2>
        </Segment>
        <Segment className='red inverted circular'>
          <Header.H3>
            Buy Now
            <Header.Subheader>
              $10.99
            </Header.Subheader>
          </Header.H3>
        </Segment>
      </div>
    )
  }
}
