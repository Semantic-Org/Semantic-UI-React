import React, { Component } from 'react'
import { Icon } from 'stardust'

export default class IconFlippedExample extends Component {
  render() {
    return (
      <div>
        <Icon flipped='horizontally' className='cloud' />
        <Icon flipped='vertically' className='cloud' />
      </div>
    )
  }
}
