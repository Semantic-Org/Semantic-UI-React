import React from 'react'

import ComponentExample from 'docs/app/Components/ComponentDoc/ComponentExample'
import ExampleSection from 'docs/app/Components/ComponentDoc/ExampleSection'

const Types = () => (
  <ExampleSection title='Types'>
    <ComponentExample
      title='Label'
      description='A label'
      examplePath='elements/Label/Types/LabelBasic'
    />
    <ComponentExample examplePath='elements/Label/Types/LabelImage' />
    <ComponentExample examplePath='elements/Label/Types/LabelImageColored' />
    <ComponentExample examplePath='elements/Label/Types/LabelIcon' />

    <ComponentExample
      title='Pointing'
      description='A label can point to content next to it'
      examplePath='elements/Label/Types/LabelPointing'
    />
    <ComponentExample examplePath='elements/Label/Types/LabelPointingColored' />
  </ExampleSection>
)

export default Types
