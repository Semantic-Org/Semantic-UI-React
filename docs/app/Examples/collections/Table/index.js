import React, { Component } from 'react'

import States from './States'
import Types from './Types'
import Variations from './Variations'

export default class TableExamples extends Component {
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
