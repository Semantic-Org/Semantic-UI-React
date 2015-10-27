import React, {Component} from 'react';
import {List, Item} from 'stardust';

export default class ListHorizontalExample extends Component {
  render() {
    return (
      <List className='horizontal'>
        <Item>
          <img className='ui avatar image' src='http://lorempixel.com/100/100/city/1' />
          <div className='content'>
            <a className='header'>Chicago</a>
            <div className='description'> This city is located in the state of Illinois</div>
          </div>
        </Item>
        <Item>
          <img className='ui avatar image' src='http://lorempixel.com/100/100/city/2' />
          <div className='content'>
            <a className='header'>Indianapolis</a>
            <div className='description'> This city is located in the state of Indiana</div>
          </div>
        </Item>
        <Item>
          <img className='ui avatar image' src='http://lorempixel.com/100/100/city/3' />
          <div className='content'>
            <a className='header'>Nashville</a>
            <div className='description'> This city is located in the state of Tennessee</div>
          </div>
        </Item>
      </List>
    );
  }
}
