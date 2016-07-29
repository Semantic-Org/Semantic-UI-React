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

      <ComponentExample
        title='Equal Width'
        description='A row can automatically resize all elements to split the available width evenly'
        examplePath='collections/Grid/Variations/GridEqualWidthExamples'
      />

      <ComponentExample
        title='Stretched'
        description='A row can automatically resize all elements to split the available width evenly'
        examplePath='collections/Grid/Variations/GridStretchedExamples'
      />

      <ComponentExample
        title='Padded'
        description='A grid can preserve its vertical and horizontal gutters on first and last columns'
        examplePath='collections/Grid/Variations/GridPaddedExamples'
      />

      <ComponentExample
        title='Relaxed'
        description='A grid can increase its gutters to allow for more negative space'
        examplePath='collections/Grid/Variations/GridRelaxedExample'
      />
      <ComponentExample examplePath='collections/Grid/Variations/GridVeryRelaxedExample' />

      <ComponentExample
        title='Colored'
        description='A grid row or column can be colored'
        examplePath='collections/Grid/Variations/GridColoredExamples'
      />

      <ComponentExample
        title='Centered'
        description='A grid can have its columns centered'
        examplePath='collections/Grid/Variations/GridCenteredExample'
      />
    </ExampleSection>

    <ExampleSection title='Responsive Variations'>
      <ComponentExample
        title='Doubling'
        description='A grid can double its column width on tablet and mobile sizes'
        examplePath='collections/Grid/ResponsiveVariations/GridDoublingExample'
      />

      <ComponentExample
        title='Stackable'
        description='A grid can have its columns stack on-top of each other after reaching mobile breakpoints'
        examplePath='collections/Grid/ResponsiveVariations/GridStackableExample'
      />
    </ExampleSection>
  </div>
)

export default GridExamples
