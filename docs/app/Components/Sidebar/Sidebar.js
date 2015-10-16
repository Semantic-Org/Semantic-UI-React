import React, {Component} from 'react';
import stardust, {Menu, MenuItem, Input} from 'stardust';

export default class Sidebar extends Component {
  state = {query: ''};

  handleSearchChange = e => this.setState({query: e.target.value});

  render() {
    let menuItems = Object.keys(stardust)
      .sort()
      .filter(name => new RegExp(this.state.query, 'i').test(name))
      .map(name => <MenuItem key={name} name={name} href={`#${name}`} />);

    return (
      <Menu className='small inverted secondary vertical pointing fluid'>
        <MenuItem name=''>
          <Input
            className='small transparent inverted'
            placeholder='Search'
            iconClass='search link icon'
            onChange={this.handleSearchChange}
          />
        </MenuItem>
        {menuItems}
      </Menu>
    );
  }
}
