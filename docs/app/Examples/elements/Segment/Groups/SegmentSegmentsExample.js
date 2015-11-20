import React, {Component} from 'react';
import {Segment} from 'stardust';

// TODO: File card to create a Segments wrapper component with appropriate classNames
export default class SegmentSegmentsExample extends Component {
  render() {
    return (
      <div className='ui segments'>
        <Segment>Top</Segment>
        <Segment>Middle</Segment>
        <Segment>Middle</Segment>
        <Segment>Middle</Segment>
        <Segment>Bottom</Segment>
      </div>
    );
  }
}
