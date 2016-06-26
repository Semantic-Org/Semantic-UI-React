import React from 'react'
import { Header, Segment } from 'stardust'

const SegmentCircularExample = () => (
  <div>
    <Segment circular>
      <Header as='h2'>
        Sale!
        <Header.Subheader>
          $10.99
        </Header.Subheader>
      </Header>
    </Segment>
    <Segment circular inverted color='red'>
      <Header as='h3'>
        Buy Now
        <Header.Subheader>
          $10.99
        </Header.Subheader>
      </Header>
    </Segment>
  </div>
)

export default SegmentCircularExample
