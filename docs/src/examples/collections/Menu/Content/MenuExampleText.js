import React, { Component } from 'react'
import { MenuItem, Header, Menu } from 'semantic-ui-react'

export default class MenuExampleText extends Component {
  state = {}

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    return (
      <Menu vertical>
        <MenuItem
          name='promotions'
          active={activeItem === 'promotions'}
          onClick={this.handleItemClick}
        >
          <Header as='h4'>Promotions</Header>
          <p>Check out our new promotions</p>
        </MenuItem>

        <MenuItem
          name='coupons'
          active={activeItem === 'coupons'}
          onClick={this.handleItemClick}
        >
          <Header as='h4'>Coupons</Header>
          <p>Check out our collection of coupons</p>
        </MenuItem>

        <MenuItem
          name='rebates'
          active={activeItem === 'rebates'}
          onClick={this.handleItemClick}
        >
          <Header as='h4'>Rebates</Header>
          <p>Visit our rebate forum for information on claiming rebates</p>
        </MenuItem>
      </Menu>
    )
  }
}
