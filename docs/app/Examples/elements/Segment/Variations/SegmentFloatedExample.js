import React, {Component} from 'react';
import {Segment} from 'stardust';

export default class SegmentFloatedExample extends Component {
  render() {
    return (
      <div>
        <Segment className='floated right'>
          This segment will appear to the right
        </Segment>
        <Segment className='floated left'>
          This segment will appear to the left
        </Segment>
      </div>
    );
  }
}
