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
      <ComponentExample examplePath='collections/Table/Types/TableCollapsing' />
      <ComponentExample examplePath='collections/Table/Types/TableStriped' />

      <ComponentExample
        title='Definition'
        description='A table may be formatted to emphasize a first column that defines a rows content'
        examplePath='collections/Table/Types/TableDefinition'
      />
      <ComponentExample examplePath='collections/Table/Types/TableApprove' />

      <ComponentExample
        title='Structured'
        description='A table can be formatted to display complex structured data'
        examplePath='collections/Table/Types/TableStructured'
      />
    </ExampleSection>
  )
}

export default Types
