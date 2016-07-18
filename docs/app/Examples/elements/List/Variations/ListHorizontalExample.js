import faker from 'faker'
import React, { Component } from 'react'
import { List, Image } from 'stardust'

export default class ListHorizontalExample extends Component {
  render() {
    const image1 = <Image className='avatar' src={faker.image.city(100, 100)} />
    const image2 = <Image className='avatar' src={faker.image.city(100, 100)} />
    const image3 = <Image className='avatar' src={faker.image.city(100, 100)} />
    return (
      <List horizontal>
        <List.Item image={image1} header='Chicago' description='This city is located in the state of Illinois' />
        <List.Item image={image2} header='Indianapolis' description='This city is located in the state of Indiana' />
        <List.Item image={image3} header='Nashville' description='This city is located in the state of Tennessee' />
      </List>
    )
  }
}
