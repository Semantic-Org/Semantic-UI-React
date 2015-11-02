import faker from 'faker';
import React, {Component} from 'react';
import {List, ListItem, Image} from 'stardust';
import faker from 'faker';

export default class ListRelaxedExample extends Component {
  render() {
    const avatar1 = <Image className='avatar' src={faker.internet.avatar()} />;
    const avatar2 = <Image className='avatar' src={faker.internet.avatar()} />;
    const avatar3 = <Image className='avatar' src={faker.internet.avatar()} />;
    return (
      <List className='relaxed'>
        <ListItem image={avatar1} header='Helen' />
        <ListItem image={avatar2} header='Christian' />
        <ListItem image={avatar3} header='Daniel' />
      </List>
    );
  }
}
