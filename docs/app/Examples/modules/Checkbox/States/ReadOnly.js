import React, {Component} from 'react';
import {Checkbox} from 'stardust';

export default class CheckboxReadOnlyExample extends Component {
  render() {
    return (
      <Checkbox className='read-only' label='This checkbox is read-only' />
    );
  }
}
