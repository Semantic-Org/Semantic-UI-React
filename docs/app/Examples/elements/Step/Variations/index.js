import React from 'react'
import ComponentExample from 'docs/app/Components/ComponentDoc/ComponentExample'
import ExampleSection from 'docs/app/Components/ComponentDoc/ExampleSection'

const Variations = () => (
  <ExampleSection title='Variations'>
    <ComponentExample
      title='Stackable'
      description='A step can stack vertically only on smaller screens.'
      examplePath='elements/Step/Variations/Stackable'
    />

    <ComponentExample
      title='Fluid'
      description='A fluid step takes up the width of its container.'
      examplePath='elements/Step/Variations/Fluid'
    />

    <ComponentExample
      title='Size'
      description='Steps can have different sizes.'
      examplePath='elements/Step/Variations/Sizes'
    />
  </ExampleSection>
)

export default Variations
