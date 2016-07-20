import React, { Component } from 'react'
import { Icon } from 'stardust'

export default class IconRotatedExample extends Component {
  render() {
    return (
      <div>
        <Icon rotated='clockwise' name='cloud' />
        <Icon rotated='counterclockwise' name='cloud' />
      </div>
    )
  }
}
