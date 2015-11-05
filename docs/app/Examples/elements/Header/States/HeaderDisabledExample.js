import React, {Component} from 'react';
import {Header} from 'stardust';

export default class HeaderDisabledExample extends Component {
  render() {
    return (
      <Header.H2 className='disabled'>
        Disabled Header
      </Header.H2>
    );
  }
}
