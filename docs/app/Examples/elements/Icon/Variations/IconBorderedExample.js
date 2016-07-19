import React, { Component } from 'react'
import { Icon } from 'stardust'

export default class IconBorderedExample extends Component {
  render() {
    return (
      <div>
        <Icon bordered name='users' />
        <Icon bordered color='teal' name='users' />
        <Icon bordered inverted color='black' name='users' />
        <Icon bordered inverted color='teal' name='users' />
      </div>
    )
  }
}
