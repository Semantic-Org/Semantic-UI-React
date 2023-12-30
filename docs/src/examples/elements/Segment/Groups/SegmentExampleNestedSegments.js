import React from 'react'
import { SegmentGroup, Segment } from 'semantic-ui-react'

const SegmentExampleNestedSegments = () => (
  <SegmentGroup>
    <Segment>Top</Segment>
    <SegmentGroup>
      <Segment>Nested Top</Segment>
      <Segment>Nested Middle</Segment>
      <Segment>Nested Bottom</Segment>
    </SegmentGroup>
    <SegmentGroup horizontal>
      <Segment>Top</Segment>
      <Segment>Middle</Segment>
      <Segment>Bottom</Segment>
    </SegmentGroup>
    <Segment>Bottom</Segment>
  </SegmentGroup>
)

export default SegmentExampleNestedSegments
