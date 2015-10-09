import React, {Component} from 'react';
import {Button} from 'stardust';

export default class extends Component {
  render() {
    return (
      <div>
        <Button className='facebook'>
          <i className='facebook icon'></i>
          Facebook
        </Button>
        <Button className='twitter'>
          <i className='twitter icon'></i>
          Twitter
        </Button>
        <Button className='google plus'>
          <i className='google plus icon'></i>
          Google Plus
        </Button>
        <Button className='vk'>
          <i className='vk icon'></i>
          VK
        </Button>
        <Button className='linkedin'>
          <i className='linkedin icon'></i>
          LinkedIn
        </Button>
        <Button className='instagram'>
          <i className='instagram icon'></i>
          Instagram
        </Button>
        <Button className='youtube'>
          <i className='youtube icon'></i>
          YouTube
        </Button>
      </div>
    );
  }
}
