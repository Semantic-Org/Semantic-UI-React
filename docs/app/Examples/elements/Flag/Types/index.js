import React, { Component } from 'react'
import ComponentExample from 'docs/app/Components/ComponentDoc/ComponentExample'
import ExampleSection from 'docs/app/Components/ComponentDoc/ExampleSection'

export default class FlagTypesExamples extends Component {
  render() {
    return (
      <ExampleSection title='Types'>
        <ComponentExample
          title='Flag'
          description='A flag can use the two digit country code, the full name, or a common alias.'
          examplePath='elements/Flag/Types/FlagExample'
        />
        <ComponentExample
          title='Country names, codes and aliases'
          description=''
          examplePath='elements/Flag/Types/FlagTableExample'
        />
      </ExampleSection>
    )
  }
}
