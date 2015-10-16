import React, {Component} from 'react';
import {Button} from 'stardust';

export default class IconExample extends Component {
  render() {
    return (
      <Button className='icon'>
        <i className='world icon' />
      </Button>
    );
  }
}
