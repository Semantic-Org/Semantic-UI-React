import React from 'react'
import ComponentExample from 'docs/src/components/ComponentDoc/ComponentExample'
import ExampleSection from 'docs/src/components/ComponentDoc/ExampleSection'

const DividerVariationsExamples = () => (
  <ExampleSection title='Variations'>
    <ComponentExample
      title='Inverted'
      description='A divider can have its colors inverted.'
      examplePath='elements/Divider/Variations/DividerExampleInverted'
    />
    <ComponentExample
      title='Fitted'
      description='A divider can be fitted, without any space above or below it.'
      examplePath='elements/Divider/Variations/DividerExampleFitted'
    />
    <ComponentExample
      title='Hidden'
      description='A hidden divider divides content without creating a dividing line.'
      examplePath='elements/Divider/Variations/DividerExampleHidden'
    />
    <ComponentExample
      title='Section'
      description='A divider can provide greater margins to divide sections of content.'
      examplePath='elements/Divider/Variations/DividerExampleSection'
    />
    <ComponentExample
      title='Clearing'
      description='A divider can clear the contents above it.'
      examplePath='elements/Divider/Variations/DividerExampleClearing'
    />
  </ExampleSection>
)

export default DividerVariationsExamples
