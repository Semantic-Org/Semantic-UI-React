import React, { Component } from 'react'
import ComponentExample from 'docs/app/Components/ComponentDoc/ComponentExample'
import ExampleSection from 'docs/app/Components/ComponentDoc/ExampleSection'

export default class ContainerTypesExamples extends Component {
  render() {
    return (
      <ExampleSection title='Types'>
        <ComponentExample
          title='Container'
          description='A standard container'
          examplePath='elements/Container/Types/ContainerContainerExample'
        />
        <ComponentExample
          title='Text Container'
          description='A container can reduce its maximum width to more naturally accomodate a single column of text'
          examplePath='elements/Container/Types/ContainerTextExample'
        />
      </ExampleSection>
    )
  }
}
