import React from 'react'
import ComponentExample from 'docs/app/Components/ComponentDoc/ComponentExample'
import ExampleSection from 'docs/app/Components/ComponentDoc/ExampleSection'

const TabTypesExamples = () => (
  <ExampleSection title='Types'>
    <ComponentExample
      title='Basic'
      description='A basic tab'
      examplePath='modules/Tab/Types/TabExampleBasic'
    />
    <ComponentExample
      title='Pointing Menu'
      description='A tab menu can point to its tab panes.'
      examplePath='modules/Tab/Types/TabExamplePointing'
    />
    <ComponentExample
      examplePath='modules/Tab/Types/TabExampleSecondaryPointing'
    />
    <ComponentExample
      title='Secondary Menu'
      description='A tab menu can adjust its appearance to de-emphasize its contents.'
      examplePath='modules/Tab/Types/TabExampleSecondary'
    />
    <ComponentExample
      title='Text Menu'
      description='A tab menu can be formatted for text content.'
      examplePath='modules/Tab/Types/TabExampleText'
    />
  </ExampleSection>
)

export default TabTypesExamples
