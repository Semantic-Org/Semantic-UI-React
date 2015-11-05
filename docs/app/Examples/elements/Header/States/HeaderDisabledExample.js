import React, {Component} from 'react';
import {Header} from 'stardust';

export default class HeaderImageExample extends Component {
  render() {
    return (
      <Header.H2 className='disabled'>
        Disabled Header
      </Header.H2>
    );
  }
}
