import React, { Component } from 'react'
import { Segment, Icon } from 'stardust'

export default class IconInvertedColoredExample extends Component {
  render() {
    return (
      <Segment className='inverted'>
        <Icon inverted color='red' className='users' />
        <Icon inverted color='orange' className='users' />
        <Icon inverted color='yellow' className='users' />
        <Icon inverted color='oliver' className='users' />
        <Icon inverted color='green' className='users' />
        <Icon inverted color='teal' className='users' />
        <Icon inverted color='blue' className='users' />
        <Icon inverted color='violet' className='users' />
        <Icon inverted color='purple' className='users' />
        <Icon inverted color='pink' className='users' />
        <Icon inverted color='brown' className='users' />
        <Icon inverted color='grey' className='users' />
        <Icon inverted color='black' className='users' />
      </Segment>
    )
  }
}
