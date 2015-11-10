import faker from 'faker';
import React, {Component} from 'react';
import {List, ListItem, Image} from 'stardust';

export default class ListAnimatedExample extends Component {
  render() {
    const avatar1 = <Image className='avatar' src={faker.internet.avatar()} />;
    const avatar2 = <Image className='avatar' src={faker.internet.avatar()} />;
    const avatar3 = <Image className='avatar' src={faker.internet.avatar()} />;
    return (
      <List className='middle aligned animated'>
        <ListItem image={avatar1} header='Helen' />
        <ListItem image={avatar2} header='Christian' />
        <ListItem image={avatar3} header='Daniel' />
      </List>
    );
  }
}
