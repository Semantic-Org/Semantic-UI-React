import React, {Component} from 'react';
import {Header} from 'stardust';

export default class HeaderIconExample extends Component {
  render() {
    const plug = <i className='plug icon' />;
    return (
      <Header.H2 icon={plug}>
        <div className='content'>
          Is Your Electricity Truly Electrifying?
        </div>
      </Header.H2>
    );
  }
}
