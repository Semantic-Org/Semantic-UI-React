import React, {Component} from 'react';
import {Input} from 'stardust';

export default class extends Component {
  render() {
    return (
      <Input className='left labeled' placeholder='mysite.com'>
        <div className='ui label'>
          http://
        </div>
      </Input>
    );
  }
}
