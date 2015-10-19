import React, {Component} from 'react';
import {Input} from 'stardust';

export default class Fluid extends Component {
  render() {
    return (
      <Input className='fluid icon' placeholder='Search...'>
        <i className='search icon' />
      </Input>
    );
  }
}
