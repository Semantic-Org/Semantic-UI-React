import React, {Component} from 'react';
import {List, Item, Message} from 'stardust';

export default class ListAnimatedExample extends Component {
  render() {
    return (
      <div>
        <Message className='info'>
        Be sure content can fit on one line, otherwise text content will reflow when hovered.
        </Message>
        <List className='middle aligned animated'>
          <Item>
            <img className='ui avatar image' src='http://lorempixel.com/100/100/people/1' />
            <div className='content'>
              <div className='header'>Helen</div>
            </div>
          </Item>
          <Item>
            <img className='ui avatar image' src='http://lorempixel.com/100/100/people/2' />
            <div className='content'>
              <div className='header'>Christian</div>
            </div>
          </Item>
          <Item>
            <img className='ui avatar image' src='http://lorempixel.com/100/100/people/3' />
            <div className='content'>
              <div className='header'>Daniel</div>
            </div>
          </Item>
        </List>
      </div>
    );
  }
}
