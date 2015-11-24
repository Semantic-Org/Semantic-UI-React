import React, {Component} from 'react';
import {Segment, Segments} from 'stardust';

export default class SegmentRaisedSegmentsExample extends Component {
  render() {
    return (
      <Segments className='raised'>
        <Segment>Left</Segment>
        <Segment>Middle</Segment>
        <Segment>Right</Segment>
      </Segments>
    );
  }
}
