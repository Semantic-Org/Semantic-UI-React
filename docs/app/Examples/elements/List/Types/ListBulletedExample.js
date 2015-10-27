import React, {Component} from 'react';
import {List, ListItem} from 'stardust';

export default class ListBulletedExample extends Component {
  render() {
    return (
      <List className='bulleted'>
        <ListItem>Apples</ListItem>
        <ListItem>Pears</ListItem>
        <ListItem>Oranges</ListItem>
      </List>
    );
  }
}
