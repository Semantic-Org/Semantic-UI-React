import React, {Component} from 'react';
import {Input} from 'stardust';

export default class extends Component {
  render() {
    return (
      <div>
        <Input className='mini icon' placeholder='Search...'>
          <i className='search icon' />
        </Input>
        <br />
        <Input className='small icon' placeholder='Search...'>
          <i className='search icon' />
        </Input>
        <br />
        <Input className='large icon' placeholder='Search...'>
          <i className='search icon' />
        </Input>
        <br />
        <Input className='big icon' placeholder='Search...'>
          <i className='search icon' />
        </Input>
        <br />
        <Input className='huge icon' placeholder='Search...'>
          <i className='search icon' />
        </Input>
        <br />
        <Input className='massive icon' placeholder='Search...'>
          <i className='search icon' />
        </Input>
      </div>
    );
  }
}
