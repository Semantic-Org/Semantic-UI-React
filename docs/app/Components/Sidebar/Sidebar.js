import _ from 'lodash';
import React, {Component} from 'react';
import stardust, {Menu, MenuItem, Input} from 'stardust';
import META from 'src/utils/Meta';

export default class Sidebar extends Component {
  state = {query: ''};

  handleSearchChange = e => this.setState({query: e.target.value});

  getComponentsByQuery() {
    return _.filter(stardust, component => {
      const name = component._meta.name;
      const isParent = META.isParent(component);
      const isQueryMatch = new RegExp(this.state.query, 'i').test(name);
      return isParent && isQueryMatch;
    });
  }

  getComponentsByType = type => {
    const items = _(this.getComponentsByQuery())
      .filter(component => META.isType(component, type))
      .sortBy((component, name) => name)
      .map(component => {
        const name = component._meta.name;
        return <MenuItem key={name} name={name} href={`#${name}`} />;
      })
      .value();

    const subMenu = (
      <div className='item'>
        <div className='header'>{_.capitalize(type)}s</div>
        <div className='menu'>{items}</div>
      </div>
    );

    return items && subMenu;
  };

  render() {
    const elements = this.getComponentsByType(META.type.element);
    const collections = this.getComponentsByType(META.type.collection);
    const views = this.getComponentsByType(META.type.view);
    const modules = this.getComponentsByType(META.type.module);

    return (
      <Menu className='inverted secondary vertical fluid' style={{margin: 0}}>
        <MenuItem>
          <Input
            className='transparent inverted icon'
            icon='search'
            placeholder='Search'
            iconClass='search link icon'
            onChange={this.handleSearchChange}
          />
        </MenuItem>
        {elements}
        {collections}
        {views}
        {modules}
      </Menu>
    );
  }
}
