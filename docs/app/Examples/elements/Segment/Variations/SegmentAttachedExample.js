import React, {Component} from 'react';
import {Segment, Segments} from 'stardust';

export default class SegmentAttachedExample extends Component {
  render() {
    return (
      <Segments>
        <Segment className='top attached'>
          This segment is on top
        </Segment>
        <Segment className='attached'>
          This segment is attached on both sides
        </Segment>
        <Segment className='bottom attached'>
          This segment is on bottom
        </Segment>
      </Segments>
    );
  }
}
