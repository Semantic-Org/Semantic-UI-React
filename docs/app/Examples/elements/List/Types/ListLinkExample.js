import React, {Component} from 'react';
import {List} from 'stardust';

export default class ListBulletedExample extends Component {
  render() {
    return (
      <List className='link'>
        <div className='active item'>Home</div>
        <a className='item'>About</a>
        <a className='item'>Services</a>
        <a className='item'>Careers</a>
      </List>
    );
  }
}
