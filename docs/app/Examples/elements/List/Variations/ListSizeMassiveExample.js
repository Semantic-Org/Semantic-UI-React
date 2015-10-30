import React, {Component} from 'react';
import {List, ListItem, Image} from 'stardust';

export default class ListSizeMassiveExample extends Component {
  render() {
    const helenAvatar = <Image className='avatar' src='http://lorempixel.com/100/100/people/1' />;
    const christianAvatar = <Image className='avatar' src='http://lorempixel.com/100/100/people/2' />;
    const danielAvatar = <Image className='avatar' src='http://lorempixel.com/100/100/people/3' />;
    return (
      <List className='massive horizontal divided'>
        <ListItem image={helenAvatar} header='Helen' />
        <ListItem image={christianAvatar} header='Christian' />
        <ListItem image={danielAvatar} header='Daniel' />
      </List>
    );
  }
}
