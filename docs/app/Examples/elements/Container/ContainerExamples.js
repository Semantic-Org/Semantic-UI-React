import React, { Component } from 'react'
import ContainerTypesExamples from './Types/ContainerTypesExamples'
import ContainerVariationsExamples from './Variations/ContainerVariationsExamples'

export default class ContainerExamples extends Component {
  render() {
    return (
      <div>
        <ContainerTypesExamples />
        <ContainerVariationsExamples />
      </div>
    )
  }
}
