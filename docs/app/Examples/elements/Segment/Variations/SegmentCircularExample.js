import React, { Component } from 'react'
import { Header, Segment } from 'stardust'

export default class SegmentCircularExample extends Component {
  render() {
    return (
      <div>
        <Segment circular>
          <Header.H2>
            Sale!
            <Header.Subheader>
              $10.99
            </Header.Subheader>
          </Header.H2>
        </Segment>
        <Segment circular inverted color='red'>
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
