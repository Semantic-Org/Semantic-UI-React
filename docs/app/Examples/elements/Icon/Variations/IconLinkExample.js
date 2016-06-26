import React, { Component } from 'react'
import { Icon } from 'stardust'

export default class IconLinkExample extends Component {
  render() {
    return (
      <div>
        <Icon link className='close' />
        <Icon link className='help' />
      </div>
    )
  }
}
