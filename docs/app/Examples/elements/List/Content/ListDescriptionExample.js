import React, {Component} from 'react';
import {List, Item} from 'stardust';

export default class ListDescriptionExample extends Component {
  render() {
    return (
      <List>
        <Item>
          <i className='map marker icon' />
          <div className='content'>
            <a className='header'>Chicago, IL></a>
            <div className='description'> This city is located in the state of Illinois</div>
          </div>
        </Item>
        <Item>
          <i className='map marker icon' />
          <div className='content'>
            <a className='header'>Nashville, TN></a>
            <div className='description'> This city is located in the state of Tennessee</div>
          </div>
        </Item>
      </List>
    );
  }
}
