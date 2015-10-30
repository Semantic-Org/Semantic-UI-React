import React, {Component} from 'react';
import {Segment, Divider} from 'stardust';

export default class DividerVerticalExample extends Component {
  render() {
    return (
      <div className='ui three column relaxed grid'>
        <div className='column'>
          <Segment className='basic'>
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio.
          </Segment>
        </div>
        <Divider className='vertical'>Or</Divider>
        <div className='column'>
          <Segment className='basic'>
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio.
          </Segment>
        </div>
        <Divider className='vertical'>And</Divider>
        <div className='column'>
          <Segment className='basic'>
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio.
          </Segment>
        </div>
      </div>
    );
  }
}
