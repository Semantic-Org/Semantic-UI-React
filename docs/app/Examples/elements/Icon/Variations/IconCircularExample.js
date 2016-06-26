import React, { Component } from 'react'
import { Icon } from 'stardust'

export default class IconCircularExample extends Component {
  render() {
    return (
      <div>
        <Icon circular className='users' />
        <Icon circular color='teal' className='users' />
        <Icon circular inverted className='users' />
        <Icon circular inverted color='teal' className='users' />
      </div>
    )
  }
}
