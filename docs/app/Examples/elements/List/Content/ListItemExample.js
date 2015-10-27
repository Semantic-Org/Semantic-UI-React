import React, {Component} from 'react';
import {List, ListItem} from 'stardust';

export default class ListItemExample extends Component {
  render() {
    return (
      <List>
        <ListItem>1</ListItem>
        <ListItem>2</ListItem>
        <ListItem>3</ListItem>
      </List>
    );
  }
}
