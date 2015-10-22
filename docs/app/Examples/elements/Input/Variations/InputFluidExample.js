import React, {Component} from 'react';
import {Input} from 'stardust';

export default class InputFluidExample extends Component {
  render() {
    return (
      <Input className='fluid icon' icon='search' placeholder='Search...' />
    );
  }
}
