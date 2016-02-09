import React, { Component } from 'react'
import { Message } from 'stardust'

export default class MessageVisibleExample extends Component {
  render() {
    return (
      <Message className='visible'>
        You can always see me
      </Message>
    )
  }
}
