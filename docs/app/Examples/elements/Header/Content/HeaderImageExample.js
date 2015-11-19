import faker from 'faker';
import React, {Component} from 'react';
import {Header, Image} from 'stardust';

export default class HeaderImageExample extends Component {
  render() {
    const photo = <Image className='circular' src={faker.image.city(120, 120)} />;
    return (
      <Header.H2 image={photo}>
        Welcome to Our City!
      </Header.H2>
    );
  }
}
