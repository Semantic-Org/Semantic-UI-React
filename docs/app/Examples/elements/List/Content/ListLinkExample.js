import React, {Component} from 'react';
import {List} from 'stardust';

export default class ListLinkExample extends Component {
  render() {
    return (
      <List>
        <a className='item'>What is a FAQ?</a>
        <a className='item'>Who is our user base?</a>
        <a className='item'>Where is our office located?</a>
      </List>
    );
  }
}
