import React, { Component } from 'react'
import { Button, Icon } from 'stardust'

export default class ButtonSocialExample extends Component {
  render() {
    return (
      <div>
        <Button className='facebook'>
          <Icon className='facebook' />
          Facebook
        </Button>
        <Button className='twitter'>
          <Icon className='twitter' />
          Twitter
        </Button>
        <Button className='google plus'>
          <Icon className='google plus' />
          Google Plus
        </Button>
        <Button className='vk'>
          <Icon className='vk' />
          VK
        </Button>
        <Button className='linkedin'>
          <Icon className='linkedin' />
          LinkedIn
        </Button>
        <Button className='instagram'>
          <Icon className='instagram' />
          Instagram
        </Button>
        <Button className='youtube'>
          <Icon className='youtube' />
          YouTube
        </Button>
      </div>
    )
  }
}
