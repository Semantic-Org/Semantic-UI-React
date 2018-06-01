import React from 'react'
import { Segment } from 'semantic-ui-react'

const SegmentExampleAttached = () => (
  <div>
    <Segment attached='top'>This segment is on top</Segment>
    <Segment attached>This segment is attached on both sides</Segment>
    <Segment attached='bottom'>This segment is on bottom</Segment>
  </div>
)

export default SegmentExampleAttached
