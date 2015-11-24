import React, {Component} from 'react';
import {Segment, Segments} from 'stardust';

export default class SegmentNestedSegmentsExample extends Component {
  render() {
    return (
      <Segments>
        <Segment>Top</Segment>
        <Segments>
          <Segment>Nested Top</Segment>
          <Segment>Nested Middle</Segment>
          <Segment>Nested Bottom</Segment>
        </Segments>
        <Segments className='horizontal'>
          <Segment>Top</Segment>
          <Segment>Middle</Segment>
          <Segment>Bottom</Segment>
        </Segments>
        <Segment>Bottom</Segment>
      </Segments>
    );
  }
}
