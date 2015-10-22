import React, {Component} from 'react';
import {Segment, Input} from 'stardust';

export default class InputInvertedExample extends Component {
  render() {
    return (
      <Segment className='inverted'>
        <Input className='inverted' placeholder='Search...' />
      </Segment>
    );
  }
}
