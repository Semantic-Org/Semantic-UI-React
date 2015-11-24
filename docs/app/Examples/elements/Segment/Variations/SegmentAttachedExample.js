import React, {Component} from 'react';
import {Segment} from 'stardust';

export default class SegmentAttachedExample extends Component {
  render() {
    return (
      <div>
        <Segment className='top attached'>
          This segment is on top
        </Segment>
        <Segment className='attached'>
          This segment is attached on both sides
        </Segment>
        <Segment className='bottom attached'>
          This segment is on bottom
        </Segment>
      </div>
    );
  }
}
