import React, {Component} from 'react';
import {Segment, Divider} from 'stardust';

export default class DividerHiddenExample extends Component {
  render() {
    return (
      <Segment>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore...
        <Divider className='hidden' />
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore...
      </Segment>
    );
  }
}
