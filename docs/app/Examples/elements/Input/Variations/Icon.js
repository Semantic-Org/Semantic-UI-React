import React, {Component} from 'react';
import {Input} from 'stardust';

export default class Icon extends Component {
  render() {
    return (
      <Input className='icon' icon='search' placeholder='Search...' />
    );
  }
}
