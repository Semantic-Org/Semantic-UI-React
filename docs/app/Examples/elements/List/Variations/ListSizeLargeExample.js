import React, {Component} from 'react';
import {List, ListItem, Image} from 'stardust';
import faker from 'faker';

export default class ListSizeLargeExample extends Component {
  render() {
    const helenAvatar = <Image className='avatar' src={faker.image.avatar()} />;
    const christianAvatar = <Image className='avatar' src={faker.image.avatar()} />;
    const danielAvatar = <Image className='avatar' src={faker.image.avatar()} />;
    return (
      <List className='large horizontal divided'>
        <ListItem image={helenAvatar} header='Helen' />
        <ListItem image={christianAvatar} header='Christian' />
        <ListItem image={danielAvatar} header='Daniel' />
      </List>
    );
  }
}
