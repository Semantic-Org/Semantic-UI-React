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
    <Segment circular inverted>
      <Header as='h2' inverted>
        Buy Now
        <Header.Subheader>
          $10.99
        </Header.Subheader>
      </Header>
    </Segment>
  </div>
)

export default SegmentCircularExample
