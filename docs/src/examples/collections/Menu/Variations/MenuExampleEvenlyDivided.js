import React, { Component } from 'react'
import { MenuItem, Menu } from 'semantic-ui-react'

export default class MenuExampleEvenlyDivided extends Component {
  state = {}

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    return (
      <Menu fluid widths={3}>
        <MenuItem
          name='buy'
          active={activeItem === 'buy'}
          onClick={this.handleItemClick}
        />
        <MenuItem
          name='sell'
          active={activeItem === 'sell'}
          onClick={this.handleItemClick}
        />
        <MenuItem
          name='rent'
          active={activeItem === 'rent'}
          onClick={this.handleItemClick}
        />
      </Menu>
    )
  }
}
