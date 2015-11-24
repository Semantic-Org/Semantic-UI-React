import React, {Component} from 'react';
import {Segment} from 'stardust';

export default class SegmentDisabledExample extends Component {
  render() {
    return (
      <Segment className='disabled'>
        Disabled content
      </Segment>
    );
  }
}
