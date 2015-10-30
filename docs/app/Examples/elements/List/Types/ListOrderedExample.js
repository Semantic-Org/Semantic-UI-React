import React, {Component} from 'react';
import {List, ListItem} from 'stardust';

export default class ListOrderedExample extends Component {
  render() {
    return (
      <List className='ordered'>
        <ListItem description='Apples'>
          <List>
            <ListItem description='Fuji' />
            <ListItem description='Granny Smith' />
            <ListItem description='Honeycrisp' />
          </List>
        </ListItem>
        <ListItem description='Pears' />
        <ListItem description='Oranges' />
      </List>
    );
  }
};
