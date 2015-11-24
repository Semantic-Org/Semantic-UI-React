import React, {Component} from 'react';
import {Segment} from 'stardust';

export default class SegmentEmphasisExample extends Component {
  render() {
    return (
      <div>
        <Segment>
          I'm here to tell you something, and you will probably read me first.
        </Segment>
        <Segment className='secondary'>
          I am pretty noticeable but you might check out other content before you look at me.
        </Segment>
        <Segment className='tertiary'>
          If you notice me you must be looking very hard.
        </Segment>
      </div>
    );
  }
}
