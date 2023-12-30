import React, { Component } from 'react'
import { MenuMenu, MenuItem, MenuHeader, Menu } from 'semantic-ui-react'

export default class MenuExampleHeaderVertical extends Component {
  state = {}
  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    return (
      <Menu vertical>
        <MenuItem>
          <MenuHeader>Products</MenuHeader>

          <MenuMenu>
            <MenuItem
              name='enterprise'
              active={activeItem === 'enterprise'}
              onClick={this.handleItemClick}
            />
            <MenuItem
              name='consumer'
              active={activeItem === 'consumer'}
              onClick={this.handleItemClick}
            />
          </MenuMenu>
        </MenuItem>

        <MenuItem>
          <MenuHeader>CMS Solutions</MenuHeader>

          <MenuMenu>
            <MenuItem
              name='rails'
              active={activeItem === 'rails'}
              onClick={this.handleItemClick}
            />
            <MenuItem
              name='python'
              active={activeItem === 'python'}
              onClick={this.handleItemClick}
            />
            <MenuItem
              name='php'
              active={activeItem === 'php'}
              onClick={this.handleItemClick}
            />
          </MenuMenu>
        </MenuItem>

        <MenuItem>
          <MenuHeader>Hosting</MenuHeader>

          <MenuMenu>
            <MenuItem
              name='shared'
              active={activeItem === 'shared'}
              onClick={this.handleItemClick}
            />
            <MenuItem
              name='dedicated'
              active={activeItem === 'dedicated'}
              onClick={this.handleItemClick}
            />
          </MenuMenu>
        </MenuItem>

        <MenuItem>
          <MenuHeader>Support</MenuHeader>

          <MenuMenu>
            <MenuItem
              name='email'
              active={activeItem === 'email'}
              onClick={this.handleItemClick}
            >
              E-mail Support
            </MenuItem>

            <MenuItem
              name='faq'
              active={activeItem === 'faq'}
              onClick={this.handleItemClick}
            >
              FAQs
            </MenuItem>
          </MenuMenu>
        </MenuItem>
      </Menu>
    )
  }
}
