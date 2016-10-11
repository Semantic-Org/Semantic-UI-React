import React from 'react'

import ComponentExample from 'docs/app/Components/ComponentDoc/ComponentExample'
import ExampleSection from 'docs/app/Components/ComponentDoc/ExampleSection'

const GridVariationsExamples = () => (
  <ExampleSection title='Variations'>
    <ComponentExample
      title='Floated'
      description='A column can sit flush against the left or right edge of a row.'
      examplePath='collections/Grid/Variations/GridFloatedExample'
    />

    <ComponentExample
      title='Column Width'
      description='A column can vary in width taking up more than a single grid column.'
      examplePath='collections/Grid/Variations/GridColumnWidthExample'
    />

    <ComponentExample
      title='Column Count'
      description='A grid can have a different number of columns per row.'
      examplePath='collections/Grid/Variations/GridColumnCountExample'
    />

    <ComponentExample
      title='Equal Width'
      description='A row can automatically resize all elements to split the available width evenly.'
      examplePath='collections/Grid/Variations/GridEqualWidthColumnExample'
    />
    <ComponentExample examplePath='collections/Grid/Variations/GridEqualWidthRowExample' />

    <ComponentExample
      title='Stretched'
      description='A row can automatically resize all elements to split the available width evenly.'
      examplePath='collections/Grid/Variations/GridStretchedExample'
    />
    <ComponentExample examplePath='collections/Grid/Variations/GridStretchedEqualExample' />

    <ComponentExample
      title='Padded'
      description='A grid can preserve its vertical and horizontal gutters on first and last columns.'
      examplePath='collections/Grid/Variations/GridPaddedExample'
    />
    <ComponentExample examplePath='collections/Grid/Variations/GridPaddedVerticallyExample' />
    <ComponentExample examplePath='collections/Grid/Variations/GridPaddedHorizontallyExample' />

    <ComponentExample
      title='Relaxed'
      description='A grid can increase its gutters to allow for more negative space.'
      examplePath='collections/Grid/Variations/GridRelaxedExample'
    />
    <ComponentExample examplePath='collections/Grid/Variations/GridVeryRelaxedExample' />

    <ComponentExample
      title='Colored'
      description='A grid row or column can be colored.'
      examplePath='collections/Grid/Variations/GridColoredColumnExample'
    />
    <ComponentExample examplePath='collections/Grid/Variations/GridColoredRowExample' />

    <ComponentExample
      title='Centered'
      description='A grid can have its columns centered.'
      examplePath='collections/Grid/Variations/GridCenteredExample'
    />

    <ComponentExample
      title='Text Alignment'
      description='A grid, row, or column can specify its text alignment.'
      examplePath='collections/Grid/Variations/GridTextAlignmentCenterExample'
    />
    <ComponentExample examplePath='collections/Grid/Variations/GridTextAlignmentMixedExample' />
    <ComponentExample examplePath='collections/Grid/Variations/GridTextAlignmentRightExample' />

    <ComponentExample
      title='Vertical Alignment'
      description={
        'A grid, row, or column can specify its vertical alignment to have all its columns vertically centered'
      }
      examplePath='collections/Grid/Variations/GridVerticalAlignmentGridExample.'
    />
    <ComponentExample examplePath='collections/Grid/Variations/GridVerticalAlignmentRowExample' />
  </ExampleSection>
)

export default GridVariationsExamples
