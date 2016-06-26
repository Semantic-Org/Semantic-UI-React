import React, { Component } from 'react'
import ComponentExample from 'docs/app/Components/ComponentDoc/ComponentExample'
import ExampleSection from 'docs/app/Components/ComponentDoc/ExampleSection'

export default class IconStatesExamples extends Component {
  render() {
    return (
      <ExampleSection title='States'>
        <ComponentExample
          title='Disabled'
          description='An icon can show that it is disabled'
          examplePath='elements/Icon/States/IconDisabledExample'
        />
        <ComponentExample
          title='Loading'
          description='An icon can be used as a simple loader'
          examplePath='elements/Icon/States/IconLoadingExample'
        />
      </ExampleSection>
    )
  }
}
