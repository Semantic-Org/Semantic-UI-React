import faker from 'faker';
import React, {Component} from 'react';
import {List, ListItem, Image} from 'stardust';
import faker from 'faker';

export default class ListHorizontalExample extends Component {
  render() {
    const image1 = <Image className='avatar' src={faker.image.city(100, 100)} />;
    const image2 = <Image className='avatar' src={faker.image.city(100, 100)} />;
    const image3 = <Image className='avatar' src={faker.image.city(100, 100)} />;
    return (
      <List className='horizontal'>
        <ListItem image={image1} header='Chicago' description='This city is located in the state of Illinois' />
        <ListItem image={image2} header='Indianapolis' description='This city is located in the state of Indiana' />
        <ListItem image={image3} header='Nashville' description='This city is located in the state of Tennessee' />
      </List>
    );
  }
}
