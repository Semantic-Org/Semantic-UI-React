import React, {Component} from 'react';
import {Header} from 'stardust';

export default class HeaderSubheaderExample extends Component {
  render() {
    return (
      <Header.H2>
        Account Settings
        <div className='sub header'>
          Manage your account settings and set email preferences
        </div>
      </Header.H2>
    );
  }
}
