import React from 'react'
import ComponentExample from 'docs/src/components/ComponentDoc/ComponentExample'
import ExampleSection from 'docs/src/components/ComponentDoc/ExampleSection'

const FlagTypesExamples = () => (
  <ExampleSection title='Types'>
    <ComponentExample
      title='Flag'
      description='A flag can use the two digit country code, the full name, or a common alias.'
      examplePath='elements/Flag/Types/FlagExampleFlag'
    />
    <ComponentExample
      title='Country names, codes and aliases.'
      description=''
      examplePath='elements/Flag/Types/FlagExampleTable'
    />
  </ExampleSection>
)

export default FlagTypesExamples
