import React from 'react'

import ComponentExample from 'docs/src/components/ComponentDoc/ComponentExample'
import ExampleSection from 'docs/src/components/ComponentDoc/ExampleSection'

const SearchTypesExamples = () => (
  <ExampleSection title='Types'>
    <ComponentExample
      title='Standard'
      description='A search can display a set of results.'
      examplePath='modules/Search/Types/SearchExampleStandard'
    />
    <ComponentExample
      title='Standard (Custom Render)'
      description='A search can have a custom rendering.'
      examplePath='modules/Search/Types/SearchExampleStandardCustom'
    />
    <ComponentExample
      title='Category'
      description='A search can display results from remote content ordered by categories.'
      examplePath='modules/Search/Types/SearchExampleCategory'
    />
    <ComponentExample
      title='Category (Custom Render)'
      description='A category search can have a custom rendering.'
      examplePath='modules/Search/Types/SearchExampleCategoryCustom'
    />
  </ExampleSection>
)

export default SearchTypesExamples
