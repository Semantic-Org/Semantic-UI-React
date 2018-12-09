import React from 'react'

import ComponentExample from 'docs/src/components/ComponentDoc/ComponentExample'
import ExampleSection from 'docs/src/components/ComponentDoc/ExampleSection'

const PaginationTypesExamples = () => (
  <ExampleSection title='Types'>
    <ComponentExample
      title='Pagination'
      description='A component to render a pagination.'
      examplePath='addons/Pagination/Types/PaginationExamplePagination'
    />
    <ComponentExample examplePath='addons/Pagination/Types/PaginationExampleCompact' />
  </ExampleSection>
)

export default PaginationTypesExamples
