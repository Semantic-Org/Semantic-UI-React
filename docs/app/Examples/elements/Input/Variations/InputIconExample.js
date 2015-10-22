import React, {Component} from 'react';
import {Input} from 'stardust';

export default class InputIconExample extends Component {
  render() {
    return (
      <Input className='icon' icon='search' placeholder='Search...' />
    );
  }
}
