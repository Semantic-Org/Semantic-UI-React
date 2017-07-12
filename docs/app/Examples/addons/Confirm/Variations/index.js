import React from 'react'
import ComponentExample from 'docs/app/Components/ComponentDoc/ComponentExample'
import ExampleSection from 'docs/app/Components/ComponentDoc/ExampleSection'

const ConfirmVariationsExamples = () => (
  <ExampleSection title='Variations'>
    <ComponentExample
      title='Header'
      description='A confirm can define a header.'
      examplePath='addons/Confirm/Variations/ConfirmExampleHeader'
    />
    <ComponentExample
      title='Content'
      description='A confirm can define content.'
      examplePath='addons/Confirm/Variations/ConfirmExampleContent'
    />
    <ComponentExample
      title='Button Text'
      description='A confirm can customize button text.'
      examplePath='addons/Confirm/Variations/ConfirmExampleButtons'
    />
  </ExampleSection>
)

export default ConfirmVariationsExamples
