import React from 'react'

import ComponentExample from 'docs/app/Components/ComponentDoc/ComponentExample'
import ExampleSection from 'docs/app/Components/ComponentDoc/ExampleSection'

const GridExamples = () => (
  <div>
    <ExampleSection title='Types'>
      <ComponentExample
        title='Grid'
        description='A basic grid'
        examplePath='collections/Grid/Types/GridExample'
      />
      <ComponentExample
        title='Divided'
        description='A grid can have dividers between its columns'
        examplePath='collections/Grid/Types/GridDividedExample'
      />
      <ComponentExample
        title='Vertically Divided'
        description='A grid can have dividers between rows'
        examplePath='collections/Grid/Types/GridVerticallyDividedExample'
      />
    </ExampleSection>
  </div>
)

export default GridExamples
