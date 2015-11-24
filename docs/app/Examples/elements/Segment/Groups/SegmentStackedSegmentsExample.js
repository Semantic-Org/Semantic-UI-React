import React, {Component} from 'react';
import {Segment, Segments} from 'stardust';

export default class SegmentStackedSegmentsExample extends Component {
  render() {
    return (
      <Segments className='stacked'>
        <Segment>Top</Segment>
        <Segment>Middle</Segment>
        <Segment>Bottom</Segment>
      </Segments>
    );
  }
}
