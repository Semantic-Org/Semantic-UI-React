import React, {Component} from 'react';
import {Segment, Segments} from 'stardust';

export default class SegmentHorizontalSegmentsExample extends Component {
  render() {
    return (
      <Segments className='horizontal'>
        <Segment>Left</Segment>
        <Segment>Middle</Segment>
        <Segment>Right</Segment>
      </Segments>
    );
  }
}
