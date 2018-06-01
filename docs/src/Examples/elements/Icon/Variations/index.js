import React from 'react'
import ComponentExample from 'docs/src/components/ComponentDoc/ComponentExample'
import ExampleSection from 'docs/src/components/ComponentDoc/ExampleSection'

const IconVariationsExamples = () => (
  <ExampleSection title='Variations'>
    <ComponentExample
      title='Fitted'
      description='An icon can be fitted, without any space to the left or right of it.'
      examplePath='elements/Icon/Variations/IconExampleFitted'
    />
    <ComponentExample
      title='Size'
      description='An icon can vary in size.'
      examplePath='elements/Icon/Variations/IconExampleSize'
    />
    <ComponentExample
      title='Link'
      description='An icon can be formatted as a link.'
      examplePath='elements/Icon/Variations/IconExampleLink'
    />
    <ComponentExample
      title='Flipped'
      description='An icon can be flipped.'
      examplePath='elements/Icon/Variations/IconExampleFlipped'
    />
    <ComponentExample
      title='Rotated'
      description='An icon can be rotated.'
      examplePath='elements/Icon/Variations/IconExampleRotated'
    />
    <ComponentExample
      title='Circular'
      description='An icon can be formatted to appear circular.'
      examplePath='elements/Icon/Variations/IconExampleCircular'
    />
    <ComponentExample
      title='Bordered'
      description='An icon can be formatted to appear bordered.'
      examplePath='elements/Icon/Variations/IconExampleBordered'
    />
    <ComponentExample
      title='Colored'
      description='An icon can be formatted with different colors.'
      examplePath='elements/Icon/Variations/IconExampleColored'
    />
    <ComponentExample
      title='Inverted'
      description='An icon can have its colors inverted for contrast.'
      examplePath='elements/Icon/Variations/IconExampleInvertedColored'
    />
  </ExampleSection>
)

export default IconVariationsExamples
