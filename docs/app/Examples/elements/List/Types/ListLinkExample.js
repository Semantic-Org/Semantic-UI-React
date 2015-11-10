import React, {Component} from 'react';
import {List, ListItem} from 'stardust';

export default class ListLinkExample extends Component {
  render() {
    const link1 = <a>Home</a>;
    const link2 = <a>About</a>;
    const link3 = <a>Services</a>;
    const link4 = <a>Careers</a>;
    return (
      <List className='link'>
        <ListItem className='active' description={link1} />
        <ListItem description={link2} />
        <ListItem description={link3} />
        <ListItem description={link4} />
      </List>
    );
  }
}
