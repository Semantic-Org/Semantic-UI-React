import React from 'react'

import ExampleSection from 'docs/app/Components/ComponentDoc/ExampleSection'
import ComponentExample from 'docs/app/Components/ComponentDoc/ComponentExample'

// TODO: Add Fixed example

const Variations = () => {
  return (
    <ExampleSection title='Variations'>
      <ComponentExample
        title='Stackable'
        description='A menu can stack at mobile resolutions'
        examplePath='collections/Menu/Variations/Stackable'
      />

      <ComponentExample
        title='Inverted'
        description='A menu may have its colors inverted to show greater contrast'
        examplePath='collections/Menu/Variations/Inverted'
      />
      <ComponentExample examplePath='collections/Menu/Variations/InvertedVertical' />
      <ComponentExample examplePath='collections/Menu/Variations/InvertedPointing' />
      <ComponentExample examplePath='collections/Menu/Variations/InvertedSegment' />
      <ComponentExample examplePath='collections/Menu/Variations/InvertedSecondary' />
    </ExampleSection>
  )
}

export default Variations
