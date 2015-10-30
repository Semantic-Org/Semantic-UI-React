import faker from 'faker';
import React, {Component} from 'react';
import {List, ListItem} from 'stardust';

export default class ListImageExample extends Component {
  render() {
    const helenAvatar = <Image className='avatar' src={faker.image.internet.avatar()} />;
    const christianAvatar = <Image className='avatar' src={faker.image.internet.avatar()} />;
    const danielAvatar = <Image className='avatar' src={faker.image.internet.avatar()} />;
    return (
      <List>
        <ListItem image={helenAvatar} header='Helen' />
        <ListItem image={christianAvatar} header='Christian' />
        <ListItem image={danielAvatar} header='Daniel' />
      </List>
    );
  }
}
