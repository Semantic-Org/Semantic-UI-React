import React, {Component} from 'react';
import {Segment} from 'stardust';

export default class SegmentCompactGroupExample extends Component {
  render() {
    return (
      <Segment.Segments className='compact'>
        <Segment>
          Pellentesque habitant morbi
        </Segment>
        <Segment>
          Pellentesque habitant morbi
        </Segment>
      </Segment.Segments>
    );
  }
}
