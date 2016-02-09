import faker from 'faker'
import React, { Component } from 'react'
import { List, ListItem, Image } from 'stardust'

export default class ListDividedExample extends Component {
  render() {
    const avatar1 = <Image className='avatar' src={faker.image.avatar()} />
    const avatar2 = <Image className='avatar' src={faker.image.avatar()} />
    const avatar3 = <Image className='avatar' src={faker.image.avatar()} />
    return (
      <List className='middle aligned divided'>
        <ListItem image={avatar1} header='Helen' />
        <ListItem image={avatar2} header='Christian' />
        <ListItem image={avatar3} header='Daniel' />
      </List>
    )
  }
}
