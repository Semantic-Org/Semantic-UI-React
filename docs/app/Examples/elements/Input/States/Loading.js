import React, {Component} from 'react';
import {Input} from 'stardust';

export default class Loading extends Component {
  render() {
    return (
      <Input className='left icon loading' placeholder='Search...'>
        <i className='search icon' />
      </Input>
    );
  }
}
