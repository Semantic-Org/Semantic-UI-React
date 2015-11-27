import React, {Component} from 'react';
import {Segment} from 'stardust';

export default class SegmentPaddedExample extends Component {
  render() {
    return (
      <Segment className='padded'>
        Padded content.
      </Segment>
    );
  }
}
