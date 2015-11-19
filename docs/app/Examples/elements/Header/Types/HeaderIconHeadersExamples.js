import React, {Component} from 'react';
import {Header} from 'stardust';

export default class HeaderIconHeadersExamples extends Component {
  render() {
    const settings = <i className='settings icon' />;
    return (
      <Header.H2 className='icon' icon={settings} >
        Account Settings
        <div className='sub header'>
          Manage your account settings and set e-mail preferences.
        </div>
      </Header.H2>
    );
  }
}
