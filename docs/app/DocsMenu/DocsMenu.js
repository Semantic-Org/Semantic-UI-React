import _ from 'lodash';
import React, {Component} from 'react';
import stardust, {Menu, MenuItem, Input} from 'stardust';

export default class DocsMenu extends Component {
  state = {menuQuery: ''};

  handleSearchChange = e => this.setState({menuQuery: e.target.value});

  render() {
    let menuItems = _(stardust)
      .keys()
      .sort()
      .filter(item => new RegExp(this.state.menuQuery, 'i').test(item))
      .map(item => <MenuItem key={item} name={item} href={`#${item}`} />)
      .value();

    return (
      <Menu className='small inverted secondary vertical pointing fluid'>
        <MenuItem>
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
