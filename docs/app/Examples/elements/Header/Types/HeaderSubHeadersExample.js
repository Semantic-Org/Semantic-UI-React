import React, {Component} from 'react';
import {Header} from 'stardust';

export default class HeaderSubHeadersExamples extends Component {
  render() {
    return (
      <div>
        <Header.H2 className='sub'>
          Price
        </Header.H2>
        <span>$10.99</span>
      </div>
    );
  }
}
