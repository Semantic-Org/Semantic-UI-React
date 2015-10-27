import React, {Component} from 'react';
import {List, ListItem} from 'stardust';

export default class ListListExample extends Component {
  render() {
    return (
      <List>
        <ListItem description='Apples' />
        <ListItem description='Pears' />
        <ListItem description='Oranges' />
      </List>
    );
  }
}
