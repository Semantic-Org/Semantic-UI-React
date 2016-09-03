import React, { Component } from 'react'
import { Menu } from 'stardust'

export default class EvenlyDivided extends Component {
  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state || {}

    return (
      <Menu fluid widths={3}>
        <Menu.Item
          name='buy'
          active={activeItem === 'buy'}
          onClick={this.handleItemClick}
        >
          Buy
        </Menu.Item>

        <Menu.Item
          name='sell'
          active={activeItem === 'sell'}
          onClick={this.handleItemClick}
        >
          Sell
        </Menu.Item>

        <Menu.Item
          name='rent'
          active={activeItem === 'rent'}
          onClick={this.handleItemClick}
        >
          Rent
        </Menu.Item>
      </Menu>
    )
  }
}
