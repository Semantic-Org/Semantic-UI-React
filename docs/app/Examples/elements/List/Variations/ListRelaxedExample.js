import React, {Component} from 'react';
import {List, Item} from 'stardust';

export default class ListRelaxedExample extends Component {
  render() {
    return (
      <List className='relaxed'>
        <Item>
          <img className='ui avatar image' src='http://lorempixel.com/100/100/people/1' />
          <div className='content'>
            <div className='header'>Helen</div>
            <div className='description'>Account Executive</div>
          </div>
        </Item>
        <Item>
          <img className='ui avatar image' src='http://lorempixel.com/100/100/people/2' />
          <div className='content'>
            <div className='header'>Christian</div>
            <div className='description'>Jr. Account Executive</div>
          </div>
        </Item>
        <Item>
          <img className='ui avatar image' src='http://lorempixel.com/100/100/people/3' />
          <div className='content'>
            <div className='header'>Daniel</div>
            <div className='description'>Head of Creative</div>
          </div>
        </Item>
      </List>
    );
  }
}
