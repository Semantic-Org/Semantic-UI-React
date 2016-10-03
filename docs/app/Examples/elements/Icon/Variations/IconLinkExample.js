import React, { Component } from 'react'
import { Icon } from 'semantic-ui-react'

export default class IconLinkExample extends Component {
  render() {
    return (
      <div>
        <Icon link name='close' />
        <Icon link name='help' />
      </div>
    )
  }
}
