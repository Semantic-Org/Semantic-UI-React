import React, { Component } from 'react'
import ListTypesExamples from './Types/ListTypesExamples'
import ListContentExamples from './Content/ListContentExamples'
import ListVariationsExamples from './Variations/ListVariationsExamples'

export default class ListExamples extends Component {
  render() {
    return (
      <div>
        <ListTypesExamples />
        <ListContentExamples />
        <ListVariationsExamples />
      </div>
    )
  }
}
