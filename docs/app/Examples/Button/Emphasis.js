import React, {Component} from 'react';
import {Button} from 'stardust';

export default class extends Component {
  render() {
    return (
      <div>
        <Button className='primary' />
        <Button className='secondary' />
      </div>
    );
  }
}
