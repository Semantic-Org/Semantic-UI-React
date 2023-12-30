import React from 'react'
import { HeaderSubheader, Header, Segment } from 'semantic-ui-react'

const square = { width: 175, height: 175 }

const SegmentExampleCircular = () => (
  <div>
    <Segment circular style={square}>
      <Header as='h2'>
        Sale!
        <HeaderSubheader>$10.99</HeaderSubheader>
      </Header>
    </Segment>
    <Segment circular inverted style={square}>
      <Header as='h2' inverted>
        Buy Now
        <HeaderSubheader>$10.99</HeaderSubheader>
      </Header>
    </Segment>
  </div>
)

export default SegmentExampleCircular
