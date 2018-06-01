import React from 'react'
import { Header, Segment } from 'semantic-ui-react'

const square = { width: 175, height: 175 }

const SegmentExampleCircular = () => (
  <div>
    <Segment circular style={square}>
      <Header as='h2'>
        Sale!
        <Header.Subheader>$10.99</Header.Subheader>
      </Header>
    </Segment>
    <Segment circular inverted style={square}>
      <Header as='h2' inverted>
        Buy Now
        <Header.Subheader>$10.99</Header.Subheader>
      </Header>
    </Segment>
  </div>
)

export default SegmentExampleCircular
