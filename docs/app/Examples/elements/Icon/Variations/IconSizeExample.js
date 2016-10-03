import React, { Component } from 'react'
import { Icon } from 'semantic-ui-react'

export default class IconSizeExample extends Component {
  render() {
    return (
      <div>
        <Icon name='home' size='mini' />
        <Icon name='home' size='tiny' />
        <Icon name='home' size='small' />
        <Icon name='home' size='small' />
        <br />
        <Icon name='home' />
        <br />
        <Icon name='home' size='large' />
        <br />
        <Icon name='home' size='big' />
        <br />
        <Icon name='home' size='huge' />
        <br />
        <Icon name='home' size='massive' />
      </div>
    )
  }
}
