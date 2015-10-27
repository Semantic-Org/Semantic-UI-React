import faker from 'faker';
import React, {Component} from 'react';
import {List, ListItem} from 'stardust';

export default class ListImageExample extends Component {
  render() {
<<<<<<< HEAD
    const helenAvatar = <Image className='avatar' src={faker.image.internet.avatar()} />;
    const christianAvatar = <Image className='avatar' src={faker.image.internet.avatar()} />;
    const danielAvatar = <Image className='avatar' src={faker.image.internet.avatar()} />;
=======
    const helenAvatar = <img className='ui avatar image' src='http://lorempixel.com/100/100/people/1' />;
    const christianAvatar = <img className='ui avatar image' src='http://lorempixel.com/100/100/people/2' />;
    const danielAvatar = <img className='ui avatar image' src='http://lorempixel.com/100/100/people/3' />;
>>>>>>> add final updates and code cleanup
    return (
      <List>
        <ListItem image={helenAvatar} header='Helen' />
        <ListItem image={christianAvatar} header='Christian' />
        <ListItem image={danielAvatar} header='Daniel' />
      </List>
    );
  }
}
