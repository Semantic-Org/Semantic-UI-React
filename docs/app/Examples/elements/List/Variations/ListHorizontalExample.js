import React, {Component} from 'react';
import {List, Item} from 'stardust';

export default class ListHorizontalExample extends Component {
  render() {
    return (
      <List className='horizontal'>
        <Item>
          <img className='ui avatar image' src='/images/avatar/small/tom.jpg' />
          <div className='content'>
            <a className='header'>Chicago, IL></a>
            <div className='description'> This city is located in the state of Illinois</div>
          </div>
        </Item>
      </List>
    );
  }
}
