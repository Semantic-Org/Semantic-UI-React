import React, { Component } from 'react'
import ComponentExample from 'docs/app/Components/ComponentDoc/ComponentExample'
import ExampleSection from 'docs/app/Components/ComponentDoc/ExampleSection'

export default class AccordionTypesExamples extends Component {
  render() {
    return (
      <ExampleSection title='Types'>
        <ComponentExample
          title='Accordion'
          description='A standard Accordion.'
          examplePath='modules/Accordion/Types/Accordion'
        />
        <ComponentExample
          title='Styled'
          description='A styled accordion adds basic formatting'
          examplePath='modules/Accordion/Types/Styled'
        />
      </ExampleSection>
    )
  }
}
