import React, {Component} from 'react';
import {Button} from 'stardust';

export default class LabeledIconExample extends Component {
  render() {
    return (
      <div>
        <Button className='labeled icon'>
          <i className='pause icon' />
          Pause
        </Button>
        <Button className='right labeled icon'>
          <i className='right arrow icon' />
          Next
        </Button>
      </div>
    );
  }
}
