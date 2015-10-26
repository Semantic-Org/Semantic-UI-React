import React, {Component} from 'react';
import {List} from 'stardust';

export default class ListBulletedExample extends Component {
  render() {
    return (
      <List className='ordered'>
        <div className='item'>Apples</div>
          <div>
            <List>
              <div className='item'>Fuji</div>
              <div className='item'>Granny Smith</div>
              <div className='item'>Honeycrisp</div>
            </List>
          </div>
        <div className='item'>Pears</div>
        <div className='item'>Oranges</div>
      </List>
    );
  }
}
