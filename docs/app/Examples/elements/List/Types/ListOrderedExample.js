import React, {Component} from 'react';
import {List, Item} from 'stardust';

export default class ListBulletedExample extends Component {
  render() {
    return (
      <List className='ordered'>
        <Item>Apples</Item>
          <div>
            <List>
              <Item>Fuji</Item>
              <Item>Granny Smith</Item>
              <Item>Honeycrisp</Item>
            </List>
          </div>
        <Item>Pears</Item>
        <Item>Oranges</Item>
      </List>
    );
  }
}
