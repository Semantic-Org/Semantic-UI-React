import faker from 'faker';
import React, {Component} from 'react';
import {List, ListItem, Image} from 'stardust';

export default class ListRelaxedExample extends Component {
  render() {
    const avatar1 = <Image className='avatar' src={faker.image.avatar()} />;
    const avatar2 = <Image className='avatar' src={faker.image.avatar()} />;
    const avatar3 = <Image className='avatar' src={faker.image.avatar()} />;
    return (
      <List className='relaxed'>
        <ListItem image={avatar1} header='Helen' />
        <ListItem image={avatar2} header='Christian' />
        <ListItem image={avatar3} header='Daniel' />
      </List>
    );
  }
}
