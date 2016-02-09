import React, { Component } from 'react'
import ExampleSection from 'docs/app/Components/ComponentDoc/ExampleSection'
import ComponentExample from 'docs/app/Components/ComponentDoc/ComponentExample'

export default class FormGroupVariationsExamples extends Component {
  render() {
    return (
      <ExampleSection title='Group Variations'>
        <ComponentExample
          title='Evenly Divided'
          description='Fields can have their widths divided evenly.'
          examplePath='collections/Form/GroupVariations/FormGroupEvenlyDividedExample'
        />
      </ExampleSection>
    )
  }
}
