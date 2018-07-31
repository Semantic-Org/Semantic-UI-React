import React from 'react'

import ExampleSection from 'docs/src/components/ComponentDoc/ExampleSection'
import ComponentExample from 'docs/src/components/ComponentDoc/ComponentExample'
import ShorthandExample from 'docs/src/components/ComponentDoc/ShorthandExample'

const Types = () => (
  <ExampleSection title='Types'>
    <ComponentExample
      title='Types'
      description='A standard table.'
      examplePath='collections/Table/Types/TableExamplePagination'
    />
    <ShorthandExample examplePath='collections/Table/Types/TableExamplePaginationShorthand' />

    <ComponentExample examplePath='collections/Table/Types/TableExamplePadded' />
    <ComponentExample examplePath='collections/Table/Types/TableExampleCollapsing' />
    <ComponentExample examplePath='collections/Table/Types/TableExampleCelledStriped' />

    <ComponentExample
      title='Definition'
      description='A table may be formatted to emphasize a first column that defines a row content.'
      examplePath='collections/Table/Types/TableExampleDefinition'
    />
    <ComponentExample examplePath='collections/Table/Types/TableExampleApprove' />

    <ComponentExample
      title='Structured'
      description='A table can be formatted to display complex structured data.'
      examplePath='collections/Table/Types/TableExampleStructured'
    />
  </ExampleSection>
)

export default Types
