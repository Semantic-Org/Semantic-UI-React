import React, { Component } from 'react'
import { MenuItem, Input, Label, Menu } from 'semantic-ui-react'

export default class MenuExampleSizeLargeMassive extends Component {
  state = { activeItem: 'inbox' }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    return (
      <Menu size='massive' vertical>
        <MenuItem
          name='inbox'
          active={activeItem === 'inbox'}
          onClick={this.handleItemClick}
        >
          <Label color='teal'>1</Label>
          Inbox
        </MenuItem>

        <MenuItem
          name='spam'
          active={activeItem === 'spam'}
          onClick={this.handleItemClick}
        >
          <Label>51</Label>
          Spam
        </MenuItem>

        <MenuItem
          name='updates'
          active={activeItem === 'updates'}
          onClick={this.handleItemClick}
        >
          <Label>1</Label>
          Updates
        </MenuItem>
        <MenuItem>
          <Input icon='search' placeholder='Search mail...' />
        </MenuItem>
      </Menu>
    )
  }
}
