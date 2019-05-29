import React from 'react'

import ComponentExample from 'docs/src/components/ComponentDoc/ComponentExample'
import ExampleSection from 'docs/src/components/ComponentDoc/ExampleSection'

const GridVariationsExamples = () => (
  <ExampleSection title='Variations'>
    <ComponentExample
      title='Floated'
      description='A column can sit flush against the left or right edge of a row.'
      examplePath='collections/Grid/Variations/GridExampleFloated'
    />

    <ComponentExample
      title='Column Width'
      description='A column can vary in width taking up more than a single grid column.'
      examplePath='collections/Grid/Variations/GridExampleColumnWidth'
    />

    <ComponentExample
      title='Column Count'
      description='A grid can have a different number of columns per row.'
      examplePath='collections/Grid/Variations/GridExampleColumnCount'
    />

    <ComponentExample
      title='Equal Width'
      description='A row can automatically resize all elements to split the available width evenly.'
      examplePath='collections/Grid/Variations/GridExampleEqualWidthColumn'
    />
    <ComponentExample examplePath='collections/Grid/Variations/GridExampleEqualWidthRow' />

    <ComponentExample
      title='Stretched'
      description='A row can automatically resize all elements to split the available height evenly.'
      examplePath='collections/Grid/Variations/GridExampleStretched'
    />
    <ComponentExample examplePath='collections/Grid/Variations/GridExampleStretchedEqual' />

    <ComponentExample
      title='Padded'
      description='A grid can preserve its vertical and horizontal gutters on first and last columns.'
      examplePath='collections/Grid/Variations/GridExamplePadded'
    />
    <ComponentExample examplePath='collections/Grid/Variations/GridExamplePaddedVertically' />
    <ComponentExample examplePath='collections/Grid/Variations/GridExamplePaddedHorizontally' />

    <ComponentExample
      title='Relaxed'
      description='A grid can increase its gutters to allow for more negative space.'
      examplePath='collections/Grid/Variations/GridExampleRelaxed'
    />
    <ComponentExample examplePath='collections/Grid/Variations/GridExampleRelaxedVery' />

    <ComponentExample
      title='Colored'
      description='A grid row or column can be colored.'
      examplePath='collections/Grid/Variations/GridExampleColoredColumn'
    />
    <ComponentExample examplePath='collections/Grid/Variations/GridExampleColoredRow' />

    <ComponentExample
      title='Inverted'
      description='A grid can be inverted to allow dividers to be seen with a dark background.'
      examplePath='collections/Grid/Variations/GridExampleInverted'
    />

    <ComponentExample
      title='Centered'
      description='A grid can have its columns centered.'
      examplePath='collections/Grid/Variations/GridExampleCentered'
    />

    <ComponentExample
      title='Text Alignment'
      description='A grid, row, or column can specify its text alignment.'
      examplePath='collections/Grid/Variations/GridExampleTextAlignmentCenter'
    />
    <ComponentExample examplePath='collections/Grid/Variations/GridExampleTextAlignmentMixed' />
    <ComponentExample examplePath='collections/Grid/Variations/GridExampleTextAlignmentRight' />

    <ComponentExample
      title='Vertical Alignment'
      description='A grid, row, or column can specify its vertical alignment to have all its columns vertically centered.'
      examplePath='collections/Grid/Variations/GridExampleVerticalAlignment'
    />
    <ComponentExample examplePath='collections/Grid/Variations/GridExampleVerticalAlignmentRow' />
  </ExampleSection>
)

export default GridVariationsExamples
