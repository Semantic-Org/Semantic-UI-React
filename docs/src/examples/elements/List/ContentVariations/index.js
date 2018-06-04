import React from 'react'

import ComponentExample from 'docs/app/Components/ComponentDoc/ComponentExample'
import ExampleSection from 'docs/app/Components/ComponentDoc/ExampleSection'

const ListContentVariations = () => (
  <ExampleSection title='Content Variations'>
    <ComponentExample
      title='Vertically Aligned'
      description='An element inside a list can be vertically aligned'
      examplePath='elements/List/ContentVariations/ListExampleVerticallyAligned'
    />

    <ComponentExample
      title='Floated'
      description='A list, or an element inside a list can be floated left or right'
      examplePath='elements/List/ContentVariations/ListExampleFloated'
    />
    <ComponentExample examplePath='elements/List/ContentVariations/ListExampleFloatedHorizontal' />
  </ExampleSection>
)

export default ListContentVariations
