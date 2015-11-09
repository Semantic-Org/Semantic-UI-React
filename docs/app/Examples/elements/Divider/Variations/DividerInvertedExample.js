import React, {Component} from 'react';
import {Segment, Divider} from 'stardust';

export default class DividerInvertedExample extends Component {
  render() {
    return (
      <Segment className='inverted'>
        <Divider className='inverted' />
        <Divider className='horizontal inverted'>Horizontal</Divider>
      </Segment>
    );
  }
}
