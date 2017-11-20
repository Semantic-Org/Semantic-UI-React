import React from 'react'

import ComponentExample from 'docs/app/Components/ComponentDoc/ComponentExample'
import ExampleSection from 'docs/app/Components/ComponentDoc/ExampleSection'
import ShorthandExample from 'docs/app/Components/ComponentDoc/ShorthandExample'

const SearchVariationsExamples = () => (
  <ExampleSection title='Variations'>
    <ComponentExample
      title='Fluid'
      description='A search can have its results take up the width of its container.'
      examplePath='modules/Search/Variations/SearchExampleFluid'
    />
    <ComponentExample
      title='Aligned'
      description='A search can have its results aligned to its left or right container edge.'
      examplePath='modules/Search/Variations/SearchExampleAligned'
    />
    <ShorthandExample
      title='Input'
      description='A search can be passed an input via shorthand props.'
      examplePath='modules/Search/Variations/SearchExampleInput'
    />
  </ExampleSection>
)

export default SearchVariationsExamples
