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
      <ComponentExample
        title='Celled'
        description='A grid can have rows divided into cells'
        examplePath='collections/Grid/Types/GridCelledExample'
      />
      <ComponentExample
        title='Internally Celled'
        description='A grid can have rows divisions only between internal rows'
        examplePath='collections/Grid/Types/GridInternallyCelledExample'
      />
    </ExampleSection>

    <ExampleSection title='Content'>
      <ComponentExample
        title='Rows'
        description='A row is a horizontal grouping of columns'
        examplePath='collections/Grid/Content/GridRowsExample'
      />
      <ComponentExample
        title='Columns'
        description='Columns each contain gutters giving them equal spacing from other columns'
        examplePath='collections/Grid/Content/GridColumnsExample'
      />
    </ExampleSection>

    <ExampleSection title='Variations'>
      <ComponentExample
        title='Floated'
        description='A column can sit flush against the left or right edge of a row'
        examplePath='collections/Grid/Variations/GridFloatedExample'
      />
      <ComponentExample
        title='Column Width'
        description='A column can vary in width taking up more than a single grid column'
        examplePath='collections/Grid/Variations/GridColumnWidthExample'
      />
      <ComponentExample
        title='Column Count'
        description='A grid can have a different number of columns per row'
        examplePath='collections/Grid/Variations/GridColumnCountExample'
      />
    </ExampleSection>
  </div>
)

export default GridExamples
