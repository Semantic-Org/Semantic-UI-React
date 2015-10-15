import React, {Component} from 'react';
import {Checkbox} from 'stardust';

export default class extends Component {
  render() {
    return (
      <Checkbox className='checked' checked={true} label='This checkbox comes prechecked' />
    );
  }
}
