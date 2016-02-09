import React, { Component } from 'react'
import { Header } from 'stardust'

export default class HeaderSubheaderExample extends Component {
  render() {
    return (
      <Header.H2>
        Account Settings
        <Header.Subheader>
          Manage your account settings and set email preferences
        </Header.Subheader>
      </Header.H2>
    )
  }
}
