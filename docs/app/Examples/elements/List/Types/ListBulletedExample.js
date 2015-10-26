import React, {Component} from 'react';
import {List} from 'stardust';

export default class ListBulletedExample extends Component {
  render() {
    return (
      <List className='bulleted'>
        <div className='item'>Apples</div>
        <div className='item'>Pears</div>
        <div className='item'>Oranges</div>
      </List>
    );
  }
}
