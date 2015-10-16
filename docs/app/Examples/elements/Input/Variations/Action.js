import React, {Component} from 'react';
import {Button, Input} from 'stardust';

export default class extends Component {
  render() {
    return (
      <Input className='action' placeholder='Search...'>
        <Button className='ui button'>Search</Button>
      </Input>
    );
  }
}
