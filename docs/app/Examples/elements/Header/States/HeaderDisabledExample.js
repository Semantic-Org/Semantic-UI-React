import React, { Component } from 'react'
import { Header } from 'stardust'

export default class HeaderDisabledExample extends Component {
  render() {
    return (
      <Header.H2 disabled>
        Disabled Header
      </Header.H2>
    )
  }
}
