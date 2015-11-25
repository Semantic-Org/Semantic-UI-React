import React, {Component} from 'react';
import {Segment} from 'stardust';

export default class SegmentNestedSegmentsExample extends Component {
  render() {
    return (
      <Segment.Segments>
        <Segment>Top</Segment>
        <Segment.Segments>
          <Segment>Nested Top</Segment>
          <Segment>Nested Middle</Segment>
          <Segment>Nested Bottom</Segment>
        </Segment.Segments>
        <Segment.Segments className='horizontal'>
          <Segment>Top</Segment>
          <Segment>Middle</Segment>
          <Segment>Bottom</Segment>
        </Segment.Segments>
        <Segment>Bottom</Segment>
      </Segment.Segments>
    );
  }
}
