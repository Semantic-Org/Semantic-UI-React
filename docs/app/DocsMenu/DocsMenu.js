import _ from 'lodash';
import React, {Component} from 'react';
import {Menu, MenuItem, Input} from 'stardust';

import DocUtil from '../utils/DocUtil';

class DocsMenu extends Component {
  state = {menuSearch: ''};

  handleSearchChange = e => this.setState({menuSearch: e.target.value});

  render() {
    let menuItems = _(DocUtil.componentNames)
      .filter(item => new RegExp(this.state.menuSearch, 'i').test(item))
      .map(item => <MenuItem key={item} name={item} href={`#${item}`} />)
      .value();

    return (
      <Menu small vertical inverted>
        <MenuItem>
          <Input
            small
            placeholder='Search'
            transparent
            iconClass='right search link icon'
            onChange={this.handleSearchChange}
          />
        </MenuItem>
        {menuItems}
      </Menu>
    );
  }
}

export default DocsMenu;
