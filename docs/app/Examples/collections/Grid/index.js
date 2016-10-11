import React from 'react'

import ComponentExample from 'docs/app/Components/ComponentDoc/ComponentExample'
import ExampleSection from 'docs/app/Components/ComponentDoc/ExampleSection'

import Content from './Content'
import Types from './Types'
import Variations from './Variations'

const GridExamples = () => (
  <div>
    <Types />
    <Content />
    <Variations />

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

      <ComponentExample
        title='Reversed'
        description='A grid or row can specify that its columns should reverse order at different device sizes'
        examplePath='collections/Grid/ResponsiveVariations/GridReversedComputerExample'
      />
      <ComponentExample examplePath='collections/Grid/ResponsiveVariations/GridReversedTabletExample' />
      <ComponentExample examplePath='collections/Grid/ResponsiveVariations/GridReversedMobileExample' />
      <ComponentExample examplePath='collections/Grid/ResponsiveVariations/GridReversedComputerVerticallyExample' />
      <ComponentExample examplePath='collections/Grid/ResponsiveVariations/GridReversedTabletVerticallyExample' />
      <ComponentExample examplePath='collections/Grid/ResponsiveVariations/GridReversedMobileVerticallyExample' />

      <ComponentExample
        title='Device Visibility'
        description='A columns or row can appear only for a specific device, or screen sizes'
        examplePath='collections/Grid/ResponsiveVariations/GridDeviceVisibilityExample'
      />

      <ComponentExample
        title='Responsive Width'
        description='A column can specify a width for a specific device'
        examplePath='collections/Grid/ResponsiveVariations/GridResponsiveWidthExamples'
      />
    </ExampleSection>
  </div>
)

export default GridExamples
