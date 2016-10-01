import React from 'react'
import ComponentExample from 'docs/app/Components/ComponentDoc/ComponentExample'
import ExampleSection from 'docs/app/Components/ComponentDoc/ExampleSection'

const Types = () => (
  <ExampleSection title='Types'>
    <ComponentExample
      title='Label'
      description='A label'
      examplePath='elements/Label/Types/LabelExampleBasic'
    />
    <ComponentExample examplePath='elements/Label/Types/LabelExampleImage' />
    <ComponentExample examplePath='elements/Label/Types/LabelExampleImageColored' />
    <ComponentExample examplePath='elements/Label/Types/LabelExampleIcon' />

    <ComponentExample
      title='Pointing'
      description='A label can point to content next to it'
      examplePath='elements/Label/Types/LabelExamplePointing'
    />
    <ComponentExample examplePath='elements/Label/Types/LabelExamplePointingColored' />
  </ExampleSection>
)

export default Types
