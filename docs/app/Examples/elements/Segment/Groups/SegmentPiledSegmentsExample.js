import React, {Component} from 'react';
import {Segment, Segments} from 'stardust';

export default class SegmentPiledSegmentsExample extends Component {
  render() {
    return (
      <Segments className='piled'>
        <Segment>Top</Segment>
        <Segment>Middle</Segment>
        <Segment>Bottom</Segment>
      </Segments>
    );
  }
}
