import React, {Component} from 'react';
import {Button} from 'stardust';

export default class extends Component {
  render() {
    return (
      <div>
        <Button className='top attached'>Top</Button>
        <div className='ui attached segment'>
          <p>Content goes here</p>
        </div>
        <Button className='bottom attached'>Bottom</Button>
      </div>
    );
  }
}
