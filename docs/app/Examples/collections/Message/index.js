import React, { Component } from 'react'
import MessageStates from './States'
import MessageTypes from './Types'
import MessageVariations from './Variations'

export default class MessageExamples extends Component {
  render() {
    return (
      <div>
        <MessageTypes />
        <MessageStates />
        <MessageVariations />
      </div>
    )
  }
}
