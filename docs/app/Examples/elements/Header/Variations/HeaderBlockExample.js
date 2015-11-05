import React, {Component} from 'react';
import {Header} from 'stardust';

export default class HeaderBlockExample extends Component {
  render() {
    return (
      <Header.H3 className='block'>
        Block Header
      </Header.H3>
    );
  }
}
