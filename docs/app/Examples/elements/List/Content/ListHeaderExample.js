import React, {Component} from 'react';
import {List} from 'stardust';

export default class ListHeaderExample extends Component {
  render() {
    return (
      <List>
        <div className='item'>
          <div className='header'>Chapter 1</div>
          The chapter in which we meet the characters
        </div>
        <div className='item'>
          <div className='header'>Chapter 2</div>
          The chapter in which the bad guy is introduced
        </div>
        <div className='item'>
          <div className='header'>Chapter 3</div>
          Spoiler alert: The chapter in which the good guy wins!
        </div>
      </List>
    );
  }
}
