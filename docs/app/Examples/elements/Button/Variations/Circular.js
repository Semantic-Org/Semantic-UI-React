import React, {Component} from 'react';
import {Button} from 'stardust';

export default class CircularExample extends Component {
  render() {
    return (
      <Button className='circular icon'>
        <i className='heart icon' />
      </Button>
    );
  }
}
