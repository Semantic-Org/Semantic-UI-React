import React, {Component} from 'react';
import {List, ListItem, Message} from 'stardust';

export default class ListAnimatedExample extends Component {
  render() {
    const avatar1 = <img className='ui avatar image' src='http://lorempixel.com/100/100/people/1' />;
    const avatar2 = <img className='ui avatar image' src='http://lorempixel.com/100/100/people/2' />;
    const avatar3 = <img className='ui avatar image' src='http://lorempixel.com/100/100/people/3' />;
    return (
      <div>
        <Message className='info'>
        Be sure content can fit on one line, otherwise text content will reflow when hovered.
        </Message>
        <List className='middle aligned animated'>
          <ListItem image={avatar1} header='Helen' />
          <ListItem image={avatar2} header='Christian' />
          <ListItem image={avatar3} header='Daniel' />
        </List>
      </div>
    );
  }
}
