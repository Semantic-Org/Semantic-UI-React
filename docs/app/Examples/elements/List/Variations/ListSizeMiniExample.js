import React, {Component} from 'react';
import {List, ListItem} from 'stardust';

export default class ListSizeMiniExample extends Component {
  render() {
    const helenAvatar = <img className='ui avatar image' src='http://lorempixel.com/100/100/people/1' />;
    const christianAvatar = <img className='ui avatar image' src='http://lorempixel.com/100/100/people/2' />;
    const danielAvatar = <img className='ui avatar image' src='http://lorempixel.com/100/100/people/3' />;
    return (
      <List className='mini horizontal divided'>
        <ListItem image={helenAvatar} header='Helen' />
        <ListItem image={christianAvatar} header='Christian' />
        <ListItem image={danielAvatar} header='Daniel' />
      </List>
    );
  }
}
