import React, { Component } from 'react'
import IconSet from './IconSet'
import States from './States'
import Variations from './Variations'
import Groups from './Groups'

export default class IconExamples extends Component {
  render() {
    return (
      <div>
        <IconSet />
        <States />
        <Variations />
        <Groups />
      </div>
    )
  }
}
