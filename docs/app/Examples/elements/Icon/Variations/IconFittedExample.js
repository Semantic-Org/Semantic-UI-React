import React, { Component } from 'react'
import { Icon } from 'semantic-ui-react'

export default class IconFittedExample extends Component {
  render() {
    return (
      <div>
        <p>Tight spacing</p>
        <Icon fitted name='help' />
        <p>Tight spacing</p>
      </div>
    )
  }
}
