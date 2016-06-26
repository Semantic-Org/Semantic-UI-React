import React, { Component } from 'react'
import { Header, Icon } from 'stardust'

export default class IconTwitterGroupExample extends Component {
  render() {
    return (
      <Header.H2>
        <Icon.Group size='large'>
          <Icon className='twitter' />
          <Icon corner className='add' />
        </Icon.Group>
        Add on Twitter
      </Header.H2>
    )
  }
}
