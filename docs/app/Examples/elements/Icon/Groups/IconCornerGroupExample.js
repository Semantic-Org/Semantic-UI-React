import React, { Component } from 'react'
import { Icon } from 'semantic-ui-react'

export default class IconCornerGroupExample extends Component {
  render() {
    return (
      <Icon.Group size='huge'>
        <Icon name='puzzle' />
        <Icon corner name='add' />
      </Icon.Group>
    )
  }
}
