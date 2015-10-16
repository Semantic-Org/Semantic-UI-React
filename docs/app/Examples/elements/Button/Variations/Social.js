import React, {Component} from 'react';
import {Button} from 'stardust';

export default class ButtonSocialExample extends Component {
  render() {
    return (
      <div>
        <Button className='facebook'>
          <i className='facebook icon' />
          Facebook
        </Button>
        <Button className='twitter'>
          <i className='twitter icon' />
          Twitter
        </Button>
        <Button className='google plus'>
          <i className='google plus icon' />
          Google Plus
        </Button>
        <Button className='vk'>
          <i className='vk icon' />
          VK
        </Button>
        <Button className='linkedin'>
          <i className='linkedin icon' />
          LinkedIn
        </Button>
        <Button className='instagram'>
          <i className='instagram icon' />
          Instagram
        </Button>
        <Button className='youtube'>
          <i className='youtube icon' />
          YouTube
        </Button>
      </div>
    );
  }
}
