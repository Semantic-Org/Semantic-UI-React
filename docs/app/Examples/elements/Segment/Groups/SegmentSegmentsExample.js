import React, {Component} from 'react';
import {Segment, Segments} from 'stardust';

export default class SegmentSegmentsExample extends Component {
  render() {
    return (
      <Segments>
        <Segment>Top</Segment>
        <Segment>Middle</Segment>
        <Segment>Middle</Segment>
        <Segment>Middle</Segment>
        <Segment>Bottom</Segment>
      </Segments>
    );
  }
}
