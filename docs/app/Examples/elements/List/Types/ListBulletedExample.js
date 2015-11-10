import React, {Component} from 'react';
import {List, ListItem} from 'stardust';

export default class ListBulletedExample extends Component {
  render() {
    return (
      <List className='bulleted'>
        <ListItem description='Apples' />
        <ListItem description='Pears' />
        <ListItem description='Oranges' />
      </List>
    );
  }
}
