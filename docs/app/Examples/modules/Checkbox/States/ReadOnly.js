import React, {Component} from 'react';
import {Checkbox} from 'stardust';

export default class extends Component {
  render() {
    return (
      <Checkbox className='read-only' label='This checkbox is read-only' />
    );
  }
}
