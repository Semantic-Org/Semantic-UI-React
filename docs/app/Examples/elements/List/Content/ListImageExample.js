import faker from 'faker'
import React, { Component } from 'react'
import { List, ListItem, Image } from 'stardust'

export default class ListImageExample extends Component {
  render() {
    const helenAvatar = <Image className='avatar' src={faker.image.avatar()} />
    const christianAvatar = <Image className='avatar' src={faker.image.avatar()} />
    const danielAvatar = <Image className='avatar' src={faker.image.avatar()} />
    return (
      <List>
        <ListItem image={helenAvatar} header='Helen' />
        <ListItem image={christianAvatar} header='Christian' />
        <ListItem image={danielAvatar} header='Daniel' />
      </List>
    )
  }
}
