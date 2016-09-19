import React, { Component } from 'react'
import Types from './Types'
import States from './States'
import Variations from './Variations'

export default class InputExamples extends Component {
  render() {
    return (
      <div>
        <Types />
        <States />
        <Variations />
      </div>
    )
  }
}
