import React, {Component} from 'react';
import {List, ListItem} from 'stardust';

export default class ListListExample extends Component {
  render() {
    return (
      <List>
        <ListItem>Apples</ListItem>
        <ListItem>Pears</ListItem>
        <ListItem>Oranges</ListItem>
      </List>
    );
  }
}
