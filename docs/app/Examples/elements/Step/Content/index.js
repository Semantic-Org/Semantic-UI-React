import React from 'react'
import ComponentExample from 'docs/app/Components/ComponentDoc/ComponentExample'
import ExampleSection from 'docs/app/Components/ComponentDoc/ExampleSection'

const StepContentExamples = () => (
  <ExampleSection title='Content'>
    <ComponentExample
      title='Description'
      description='A step can contain a description.'
      examplePath='elements/Step/Content/StepExampleDescriptions'
    />

    <ComponentExample
      title='Icon'
      description='A step can contain an icon.'
      examplePath='elements/Step/Content/StepExampleIcons'
    />

    <ComponentExample
      title='Link'
      description='A step can link.'
      examplePath='elements/Step/Content/StepExampleLinks'
    />
  </ExampleSection>
)

export default StepContentExamples
