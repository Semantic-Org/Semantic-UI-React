import React, {Component} from 'react';
import {List, Item} from 'stardust';

export default class ListBulletedExample extends Component {
  render() {
    return (
      <List className='bulleted'>
        <Item>Apples</Item>
        <Item>Pears</Item>
        <Item>Oranges</Item>
      </List>
    );
  }
}
