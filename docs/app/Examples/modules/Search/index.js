import React from 'react'
import ComponentExample from 'docs/app/Components/ComponentDoc/ComponentExample'
import ExampleSection from 'docs/app/Components/ComponentDoc/ExampleSection'

const SearchExamples = () => (
  <div>
    <ExampleSection title='Types'>
      <ComponentExample
        title='Standard'
        description='A search can display a set of results'
        examplePath='modules/Search/Types/Standard'
      />
      <ComponentExample
        title='Standard (Custom Render)'
        description='A search can have a custom rendering'
        examplePath='modules/Search/Types/StandardCustom'
      />
      <ComponentExample
        title='Category'
        description='A search can display results from remote content ordered by categories'
        examplePath='modules/Search/Types/Category'
      />
      <ComponentExample
        title='Category (Custom Render)'
        description='A category search can have a custom rendering'
        examplePath='modules/Search/Types/CategoryCustom'
      />
    </ExampleSection>
    <ExampleSection title='Variations'>
      <ComponentExample
        title='Fluid'
        description='A search can have its results take up the width of its container'
        examplePath='modules/Search/Variations/Fluid'
      />
      <ComponentExample
        title='Aligned'
        description='A search can have its results aligned to its left or right container edge'
        examplePath='modules/Search/Variations/Aligned'
      />
    </ExampleSection>
  </div>
)

export default SearchExamples
