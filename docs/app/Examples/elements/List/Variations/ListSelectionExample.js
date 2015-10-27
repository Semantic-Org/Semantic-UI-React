import faker from 'faker';
import React, {Component} from 'react';
import {List, ListItem} from 'stardust';

export default class ListSelectionExample extends Component {
  render() {
<<<<<<< HEAD
    const avatar1 = <Image className='avatar' src={faker.internet.avatar()} />;
    const avatar2 = <Image className='avatar' src={faker.internet.avatar()} />;
    const avatar3 = <Image className='avatar' src={faker.internet.avatar()} />;
=======
    const avatar1 = <img className='ui avatar image' src='http://lorempixel.com/100/100/people/1' />;
    const avatar2 = <img className='ui avatar image' src='http://lorempixel.com/100/100/people/2' />;
    const avatar3 = <img className='ui avatar image' src='http://lorempixel.com/100/100/people/3' />;
>>>>>>> add final updates and code cleanup
    return (
      <List className='selection'>
        <ListItem image={avatar1} header='Helen' />
        <ListItem image={avatar2} header='Christian' />
        <ListItem image={avatar3} header='Daniel' />
      </List>
    );
  }
}
