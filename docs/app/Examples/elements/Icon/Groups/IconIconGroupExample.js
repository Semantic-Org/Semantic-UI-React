import React, { Component } from 'react'
import { Icon } from 'semantic-ui-react'

export default class IconIconGroupExample extends Component {
  render() {
    return (
      <Icon.Group size='huge'>
        <Icon size='big' name='thin circle' />
        <Icon name='user' />
      </Icon.Group>
    )
  }
}
