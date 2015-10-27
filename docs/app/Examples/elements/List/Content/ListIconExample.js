import React, {Component} from 'react';
import {List, ListItem} from 'stardust';

export default class ListIconExample extends Component {
  render() {
    const helpIcon = <i className='help icon' />;
    const triangleIcon = <i className='right triangle icon' />;

    return (
      <List>
        <ListItem
          image={helpIcon}
          header='Floated Icon'
          description='This text will always have a left margin so it sits alongside the icon'
        />
        <ListItem
          image={triangleIcon}
          header='Icon Alignment'
          description='Floated icons are by default top aligned'
        />
        <ListItem image={helpIcon}>
          Inline Text
        </ListItem>
      </List>
    );
  }
}
