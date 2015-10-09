import React, {Component} from 'react';
import {Button} from 'stardust';

export default class extends Component {
  render() {
    return (
      <Button className='labeled'>
        <div className='ui button'>
          <i className='heart icon'></i> Like
        </div>
        <a className='ui basic label'>
          3,000
        </a>
      </Button>
    );
  }
}
