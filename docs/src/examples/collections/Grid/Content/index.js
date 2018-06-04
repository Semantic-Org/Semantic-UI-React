import React from 'react'

import ComponentExample from 'docs/src/components/ComponentDoc/ComponentExample'
import ExampleSection from 'docs/src/components/ComponentDoc/ExampleSection'

const GridContentExamples = () => (
  <ExampleSection title='Content'>
    <ComponentExample
      title='Rows'
      description='A row is a horizontal grouping of columns.'
      examplePath='collections/Grid/Content/GridExampleRows'
    />

    <ComponentExample
      title='Columns'
      description='Columns each contain gutters giving them equal spacing from other columns.'
      examplePath='collections/Grid/Content/GridExampleColumns'
    />
  </ExampleSection>
)

export default GridContentExamples
