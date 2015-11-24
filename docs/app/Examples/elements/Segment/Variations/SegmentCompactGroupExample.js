import React, {Component} from 'react';
import {Segment, Segments} from 'stardust';

export default class SegmentCompactGroupsExample extends Component {
  render() {
    return (
      <Segments className='compact'>
        <Segment>
          Pellentesque habitant morbi
        </Segment>
        <Segment>
          Pellentesque habitant morbi
        </Segment>
      </Segments>
    );
  }
}
