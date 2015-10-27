import React, {Component} from 'react';
import {List, ListItem} from 'stardust';

export default class ListDividedExample extends Component {
  render() {
    const avatar1 = <img className='ui avatar image' src='http://lorempixel.com/100/100/people/1' />;
    const avatar2 = <img className='ui avatar image' src='http://lorempixel.com/100/100/people/2' />;
    const avatar3 = <img className='ui avatar image' src='http://lorempixel.com/100/100/people/3' />;

    return (
      <List className='middle aligned divided'>
        <ListItem image={avatar1} header='Helen' />
        <ListItem image={avatar2} header='Christian' />
        <ListItem image={avatar3} header='Daniel' />
      </List>
    );
  }
}
