import React, {Component} from 'react';
import {Input} from 'stardust';

export default class extends Component {
  render() {
    return (
      <Input className='icon' placeholder='Search...'>
        <i className='search icon' />
      </Input>
    );
  }
}
