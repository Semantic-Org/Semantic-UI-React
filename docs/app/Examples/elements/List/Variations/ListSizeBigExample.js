import React, {Component} from 'react';
import {List, ListItem, Image} from 'stardust';
import faker from 'faker';

export default class ListSizeBigExample extends Component {
  render() {
    const helenAvatar = <Image className='avatar' src={faker.internet.avatar()} />;
    const christianAvatar = <Image className='avatar' src={faker.internet.avatar()} />;
    const danielAvatar = <Image className='avatar' src={faker.internet.avatar()} />;
    return (
      <List className='big horizontal divided'>
        <ListItem image={helenAvatar} header='Helen' />
        <ListItem image={christianAvatar} header='Christian' />
        <ListItem image={danielAvatar} header='Daniel' />
      </List>
    );
  }
}
