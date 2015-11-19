import React, {Component} from 'react';
import {Header} from 'stardust';

export default class HeaderContentHeadersExamples extends Component {
  render() {
    return (
      <div>
        <Header className='huge'>
          Huge Header
        </Header>
        <Header className='large'>
          Large Header
        </Header>
        <Header className='medium'>
          Medium Header
        </Header>
        <Header className='small'>
          Small Header
        </Header>
        <Header className='tiny'>
          Tiny Header
        </Header>
      </div>
    );
  }
}
