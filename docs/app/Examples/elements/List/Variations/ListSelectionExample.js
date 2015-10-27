import React, {Component} from 'react';
import {List, Item} from 'stardust';

export default class ListSelectionExample extends Component {
  render() {
    return (
      <List className='middle aligned selection'>
        <Item>
          <img className='ui avatar image' src='http://lorempixel.com/100/100/people/1' />
          <div className='content'>
            <div className='header'>Helen</div>
          </div>
        </Item>
        <Item>
          <img className='ui avatar image' src='http://lorempixel.com/100/100/people/2' />
          <div className='content'>
            <div className='header'>Christian</div>
          </div>
        </Item>
        <Item>
          <img className='ui avatar image' src='http://lorempixel.com/100/100/people/3' />
          <div className='content'>
            <div className='header'>Daniel</div>
          </div>
        </Item>
      </List>
    );
  }
}
