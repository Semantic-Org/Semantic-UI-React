import React, { Component } from 'react'
import { Button, Icon } from 'stardust'

export default class ButtonSocialExample extends Component {
  render() {
    return (
      <div>
        <Button className='facebook'>
          <Icon name='facebook' />
          Facebook
        </Button>
        <Button className='twitter'>
          <Icon name='twitter' />
          Twitter
        </Button>
        <Button className='google plus'>
          <Icon name='google plus' />
          Google Plus
        </Button>
        <Button className='vk'>
          <Icon name='vk' />
          VK
        </Button>
        <Button className='linkedin'>
          <Icon name='linkedin' />
          LinkedIn
        </Button>
        <Button className='instagram'>
          <Icon name='instagram' />
          Instagram
        </Button>
        <Button className='youtube'>
          <Icon name='youtube' />
          YouTube
        </Button>
      </div>
    )
  }
}
