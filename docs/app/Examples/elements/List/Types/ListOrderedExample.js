import React, {Component} from 'react';
import {List, ListItem} from 'stardust';

export default class ListOrderedExample extends Component {
  render() {
    return (
      <List className='ordered'>
<<<<<<< HEAD
        <ListItem description='Apples'>
          <List>
            <ListItem description='Fuji' />
            <ListItem description='Granny Smith' />
            <ListItem description='Honeycrisp' />
          </List>
        </ListItem>
=======
        <ListItem description='Apples' />
          <div>
            <List>
              <ListItem description='Fuji' />
              <ListItem description='Granny Smith' />
              <ListItem description='Honeycrisp' />
            </List>
          </div>
>>>>>>> add final updates and code cleanup
        <ListItem description='Pears' />
        <ListItem description='Oranges' />
      </List>
    );
  }
};
