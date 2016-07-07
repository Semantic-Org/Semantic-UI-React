import React, { Component } from 'react'
import { Icon } from 'stardust'

export default class IconFlippedExample extends Component {
  render() {
    return (
      <div>
        <Icon flipped='horizontally' name='cloud' />
        <Icon flipped='vertically' name='cloud' />
      </div>
    )
  }
}
