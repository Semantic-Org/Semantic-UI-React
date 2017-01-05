import React from 'react'

import ComponentExample from 'docs/app/Components/ComponentDoc/ComponentExample'
import ExampleSection from 'docs/app/Components/ComponentDoc/ExampleSection'

const LabelTypes = () => (
  <ExampleSection title='Types'>
    <ComponentExample
      title='Label'
      description='A label'
      examplePath='elements/Label/Types/LabelExampleBasic'
    />
    <ComponentExample examplePath='elements/Label/Types/LabelExampleImage' />
    <ComponentExample examplePath='elements/Label/Types/LabelExampleImageColored' />
    <ComponentExample examplePath='elements/Label/Types/LabelExampleIcon' />

    <ComponentExample
      title='Pointing'
      description='A label can point to content next to it'
      examplePath='elements/Label/Types/LabelExamplePointing'
    />
    <ComponentExample examplePath='elements/Label/Types/LabelExamplePointingColored' />

    <ComponentExample
      title='Corner'
      description='A label can position itself in the corner of an element'
      examplePath='elements/Label/Types/LabelExampleCorner'
    />

    <ComponentExample
      title='Tag'
      description='A label can appear as a tag'
      examplePath='elements/Label/Types/LabelExampleTag'
    />

    <ComponentExample
      title='Ribbon'
      description='A label can appear as a ribbon attaching itself to an element'
      examplePath='elements/Label/Types/LabelExampleRibbon'
    />
    <ComponentExample examplePath='elements/Label/Types/LabelExampleRibbonImage' />

    <ComponentExample
      title='Attached'
      description='A label can attach to a content segment'
      examplePath='elements/Label/Types/LabelExampleAttached'
    />

    <ComponentExample
      title='Horizontal'
      description='A horizontal label is formatted to label content along-side it horizontally'
      examplePath='elements/Label/Types/LabelExampleHorizontal'
    />

    <ComponentExample
      title='Floating'
      description='A label can float above another element'
      examplePath='elements/Label/Types/LabelExampleFloating'
    />
  </ExampleSection>
)

export default LabelTypes
