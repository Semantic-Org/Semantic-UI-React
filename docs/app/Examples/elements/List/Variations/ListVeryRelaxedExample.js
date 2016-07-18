import React, { Component } from 'react'
import { List, Image } from 'stardust'
import faker from 'faker'

export default class ListVeryRelaxedExample extends Component {
  render() {
    const avatar1 = <Image className='avatar' src={faker.image.avatar()} />
    const avatar2 = <Image className='avatar' src={faker.image.avatar()} />
    const avatar3 = <Image className='avatar' src={faker.image.avatar()} />

    return (
      <List relaxed='very'>
        <List.Item image={avatar1} header='Helen' />
        <List.Item image={avatar2} header='Christian' />
        <List.Item image={avatar3} header='Daniel' />
      </List>
    )
  }
}
