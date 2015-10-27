import React, {Component} from 'react';
import {List} from 'stardust';

export default class ListIconExample extends Component {
  render() {
    return (
      <List>
        <a className='item'>
          <i className='help icon' />
          <div className='content'>
            <div className='header'>Floated Icon</div>
            <div className='description'>This text will always have a left margin so it sits alongside the icon</div>
          </div>
        </a>
        <a className='item'>
          <i className='right triangle icon' />
          <div className='content'>
            <div className='header'>Icon Alignment</div>
            <div className='description'>Floated icons are by default top aligned</div>
          </div>
        </a>
        <div className='item'>
          <i className='help icon' />
          <div className='content'>
          Inline Text
          </div>
        </div>
      </List>
    );
  }
}
