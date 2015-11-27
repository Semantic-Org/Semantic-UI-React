import React, {Component} from 'react';
import {Segment} from 'stardust';

export default class SegmentLoadingExample extends Component {
  render() {
    return (
      <Segment className='loading'>
        Loading content.
      </Segment>
    );
  }
}
