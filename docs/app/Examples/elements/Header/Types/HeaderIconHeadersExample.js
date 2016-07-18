import React, { Component } from 'react'
import { Header, Icon } from 'stardust'

export default class HeaderIconHeadersExample extends Component {
  render() {
    const settings = <Icon className='settings' />
    return (
      <Header.H2 className='icon' icon={settings} >
        Account Settings
        <Header.Subheader>
          Manage your account settings and set e-mail preferences.
        </Header.Subheader>
      </Header.H2>
    )
  }
}
