import React from 'react'

import ExampleSection from 'docs/app/Components/ComponentDoc/ExampleSection'
import ComponentExample from 'docs/app/Components/ComponentDoc/ComponentExample'

const Types = () => {
  return (
    <ExampleSection title='Types'>
      <ComponentExample
        title='Types'
        description='A standard table'
        examplePath='collections/Table/Types/TablePagination'
      />
      <ComponentExample examplePath='collections/Table/Types/TablePadded' />
    </ExampleSection>
  )
}

export default Types
