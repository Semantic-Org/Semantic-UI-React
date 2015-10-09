import React, {Component} from 'react';
import {Button} from 'stardust';

export default class extends Component {
  render() {
    return (
      <div>
        <Button className='labeled icon'>
          <i className='pause icon'></i>
          Pause
        </Button>
        <Button className='right labeled icon'>
          <i className='right arrow icon'></i>
          Next
        </Button>
      </div>
    );
  }
}
