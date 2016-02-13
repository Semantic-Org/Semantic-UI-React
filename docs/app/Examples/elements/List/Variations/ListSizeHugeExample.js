import React, { Component } from 'react'
import { List, Image } from 'stardust'
import faker from 'faker'

export default class ListSizeHugeExample extends Component {
  render() {
    const helenAvatar = <Image className='avatar' src={faker.image.avatar()} />
    const christianAvatar = <Image className='avatar' src={faker.image.avatar()} />
    const danielAvatar = <Image className='avatar' src={faker.image.avatar()} />
    return (
      <List className='huge horizontal divided'>
        <List.Item image={helenAvatar} header='Helen' />
        <List.Item image={christianAvatar} header='Christian' />
        <List.Item image={danielAvatar} header='Daniel' />
      </List>
    )
  }
}
