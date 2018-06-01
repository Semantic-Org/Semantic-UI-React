import React from 'react'

import ComponentExample from 'docs/src/components/ComponentDoc/ComponentExample'
import ExampleSection from 'docs/src/components/ComponentDoc/ExampleSection'

const PaginationUsageExamples = () => (
  <ExampleSection title='Usage'>
    <ComponentExample
      title='Controlled'
      description='A pagination can be controlled component.'
      examplePath='addons/Pagination/Usage/PaginationExampleControlled'
    />
    <ComponentExample
      title='Options'
      description='A pagination has configurable options.'
      examplePath='addons/Pagination/Usage/PaginationExampleOptions'
    />
    <ComponentExample
      title='Menu Props'
      description='A pagination is a wrapper for Menu component, you can use Menu props with Pagination.'
      examplePath='addons/Pagination/Usage/PaginationExampleMenuProps'
    />
    <ComponentExample
      title='Shorthand'
      description='A pagination has support of shorthand API for its items.'
      examplePath='addons/Pagination/Usage/PaginationExampleShorthand'
    />
  </ExampleSection>
)

export default PaginationUsageExamples
