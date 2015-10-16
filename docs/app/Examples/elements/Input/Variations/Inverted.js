import React, {Component} from 'react';
import {Segment, Input} from 'stardust';

export default class extends Component {
  render() {
    return (
      <Segment className='inverted'>
        <Input className='inverted' placeholder='Search...' />
      </Segment>
    );
  }
}
