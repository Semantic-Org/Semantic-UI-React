import React from 'react'

import ComponentExample from 'docs/app/Components/ComponentDoc/ComponentExample'
import ExampleSection from 'docs/app/Components/ComponentDoc/ExampleSection'

const Variations = () => (
  <ExampleSection title='Variations'>
    <ComponentExample
      title='Fluid Card'
      description='A fluid card takes up the width of its container.'
      examplePath='views/Card/Variations/CardExampleFluid'
    />
    <ComponentExample
      title='Colored'
      description='A card can specify a color.'
      examplePath='views/Card/Variations/CardExampleColored'
    />
    <ComponentExample
      title='Column Count'
      description='A group of cards can set how many cards should exist in a row.'
      examplePath='views/Card/Variations/CardExampleColumnCount'
    />
  </ExampleSection>
)

export default Variations
