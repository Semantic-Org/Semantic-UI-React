import React, { Component } from 'react'
import { Icon } from 'stardust'

export default class IconFittedExample extends Component {
  render() {
    return (
      <div>
        <p>Tight spacing</p>
        <Icon fitted className='help' />
        <p>Tight spacing</p>
      </div>
    )
  }
}
