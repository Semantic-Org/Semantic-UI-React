import React, { Component } from 'react'
import Types from './Types'
import Content from './Content'
import States from './States'
import Variations from './Variations'

export default class ProgressExamples extends Component {
  render() {
    return (
      <div>
        <Types />
        <Content />
        <States />
        <Variations />
      </div>
    )
  }
}
