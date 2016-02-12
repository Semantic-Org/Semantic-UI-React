import React, { Component } from 'react'
import { List } from 'stardust'

export default class ListBulletedExample extends Component {
  render() {
    return (
      <List className='bulleted'>
        <List.Item description='Apples' />
        <List.Item description='Pears' />
        <List.Item description='Oranges' />
      </List>
    )
  }
}
