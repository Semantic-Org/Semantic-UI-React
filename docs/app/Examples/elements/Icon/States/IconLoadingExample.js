import React, { Component } from 'react'
import { Icon } from 'stardust'

export default class IconLoadingExample extends Component {
  render() {
    return (
      <div>
        <Icon loading className='spinner' />
        <Icon loading className='certificate' />
        <Icon loading className='asterisk' />
      </div>
    )
  }
}
