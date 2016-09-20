import React, { Component } from 'react'
import { Menu, Message } from 'stardust'

export default class LinkItem extends Component {
  handleClick = () => this.setState({ message: 'onClick handled' })

  render() {
    const { message } = this.state || {}

    return (
      <div>
        <Menu vertical>
          <Menu.Item href='//google.com' target='_blank'>Visit Google</Menu.Item>
          <Menu.Item link>Link via prop</Menu.Item>
          <Menu.Item onClick={this.handleClick}>Javascript Link</Menu.Item>
        </Menu>

        {message && <Message content={message} />}
      </div>
    )
  }
}
