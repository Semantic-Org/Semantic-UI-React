import React, { Component } from 'react'
import { Header, Icon } from 'stardust'

export default class HeaderIconExample extends Component {
  render() {
    const plug = <Icon name='plug' />
    return (
      <Header.H2 icon={plug}>
        Is Your Electricity Truly Electrifying?
      </Header.H2>
    )
  }
}
