import React, {Component} from 'react';
import {List, ListItem} from 'stardust';

export default class ListHorizontalExample extends Component {
  render() {
    const image1 = <img className='ui avatar image' src='http://lorempixel.com/100/100/city/1' />;
    const image2 = <img className='ui avatar image' src='http://lorempixel.com/100/100/city/2' />;
    const image3 = <img className='ui avatar image' src='http://lorempixel.com/100/100/city/3' />;

    return (
      <List className='horizontal'>
        <ListItem image={image1} header='Chicago' description='This city is located in the state of Illinois' />
        <ListItem image={image2} header='Indianapolis' description='This city is located in the state of Indiana' />
        <ListItem image={image3} header='Nashville' description='This city is located in the state of Tennessee' />
      </List>
    );
  }
}
