import React, {Component} from 'react';
import {Input} from 'stardust';

export default class Disabled extends Component {
  render() {
    return (
      <Input className='disabled' placeholder='Search...' />
    );
  }
}
