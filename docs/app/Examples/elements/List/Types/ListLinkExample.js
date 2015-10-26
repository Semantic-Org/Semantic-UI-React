import React, {Component} from 'react';
<<<<<<< HEAD
import {List, ListItem} from 'stardust';

export default class ListLinkExample extends Component {
  render() {
    const link1 = <a>Home</a>;
    const link2 = <a>About</a>;
    const link3 = <a>Services</a>;
    const link4 = <a>Careers</a>;
    return (
      <List className='link'>
        <ListItem className='active' description={link1} />
        <ListItem description={link2} />
        <ListItem description={link3} />
        <ListItem description={link4} />
=======
import {List} from 'stardust';

export default class ListBulletedExample extends Component {
  render() {
    return (
      <List className='link'>
        <div className='active item'>Home</div>
        <a className='item'>About</a>
        <a className='item'>Services</a>
        <a className='item'>Careers</a>
>>>>>>> add list types examples
      </List>
    );
  }
}
