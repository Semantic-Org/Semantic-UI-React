import React, { Component } from 'react'
import { MenuItem, Menu } from 'semantic-ui-react'

export default class MenuExampleVerticalText extends Component {
  state = { activeItem: 'closest' }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    return (
      <Menu text vertical>
        <MenuItem header>Sort By</MenuItem>
        <MenuItem
          name='closest'
          active={activeItem === 'closest'}
          onClick={this.handleItemClick}
        />
        <MenuItem
          name='mostComments'
          active={activeItem === 'mostComments'}
          onClick={this.handleItemClick}
        />
        <MenuItem
          name='mostPopular'
          active={activeItem === 'mostPopular'}
          onClick={this.handleItemClick}
        />
      </Menu>
    )
  }
}
