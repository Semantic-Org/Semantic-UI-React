import React, {Component} from 'react';
import {List, ListItem} from 'stardust';

export default class ListBulletedExample extends Component {
  render() {
    return (
      <List className='ordered'>
        <ListItem>Apples</ListItem>
          <div>
            <List>
              <ListItem>Fuji</ListItem>
              <ListItem>Granny Smith</ListItem>
              <ListItem>Honeycrisp</ListItem>
            </List>
          </div>
        <ListItem>Pears</ListItem>
        <ListItem>Oranges</ListItem>
      </List>
    );
  }
}
