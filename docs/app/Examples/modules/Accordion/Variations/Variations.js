import React, { Component } from 'react'
import ComponentExample from 'docs/app/Components/ComponentDoc/ComponentExample'
import ExampleSection from 'docs/app/Components/ComponentDoc/ExampleSection'

export default class AccordionTypesExamples extends Component {
  render() {
    return (
      <ExampleSection title='Varations'>
        <ComponentExample
          title='Fluid'
          description='An accordion can take up the width of its container'
          examplePath='modules/Accordion/Variations/Fluid'
        />
        <ComponentExample
          title='Inverted'
          description='An accordion can be formatted to appear on dark backgrounds'
          examplePath='modules/Accordion/Variations/Inverted'
        />
      </ExampleSection>
    )
  }
}
