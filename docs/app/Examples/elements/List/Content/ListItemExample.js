import React, {Component} from 'react';
import {List, Item} from 'stardust';

export default class ListItemExample extends Component {
  render() {
    return (
      <List>
        <Item>1</Item>
        <Item>2</Item>
        <Item>3</Item>
      </List>
    );
  }
}
