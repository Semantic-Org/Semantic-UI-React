import React, { Component } from 'react'
import ExampleSection from 'docs/app/Components/ComponentDoc/ExampleSection'
import ComponentExample from 'docs/app/Components/ComponentDoc/ComponentExample'

export default class FormFieldVariationsExamples extends Component {
  render() {
    return (
      <ExampleSection title='Field Variations'>
        <ComponentExample
          title='Inline'
          description='A field can have its label next to instead of above it.'
          examplePath='collections/Form/FieldVariations/FormFieldInlineExample'
        />
      </ExampleSection>
    )
  }
}
