import React, { Component } from 'react'
import { Icon } from 'stardust'

export default class IconBorderedExample extends Component {
  render() {
    return (
      <div>
        <Icon bordered className='users' />
        <Icon bordered color='teal' className='users' />
        <Icon bordered inverted color='black' className='users' />
        <Icon bordered inverted color='teal' className='users' />
      </div>
    )
  }
}
