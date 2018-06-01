import React from 'react'
import ComponentExample from 'docs/src/components/ComponentDoc/ComponentExample'
import ExampleSection from 'docs/src/components/ComponentDoc/ExampleSection'

const ButtonVariationsExamples = () => (
  <ExampleSection title='Variations'>
    <ComponentExample
      title='Social'
      description='A button can be formatted to link to a social website.'
      examplePath='elements/Button/Variations/ButtonExampleSocial'
    />
    <ComponentExample
      title='Size'
      description='Buttons can have assorted sizes.'
      examplePath='elements/Button/Variations/ButtonExampleSize'
    />
    <ComponentExample
      title='Floated'
      description='A button can be aligned to the left or right of its container.'
      examplePath='elements/Button/Variations/ButtonExampleFloated'
    />
    <ComponentExample
      title='Colored'
      description='A button can have different containers.'
      examplePath='elements/Button/Variations/ButtonExampleColored'
    />
    <ComponentExample
      title='Compact'
      description='Buttons can have reduced padding.'
      examplePath='elements/Button/Variations/ButtonExampleCompact'
    />
    <ComponentExample
      title='Toggle'
      description='A button can be formatted to toggle when active.'
      examplePath='elements/Button/Variations/ButtonExampleToggle'
    />
    <ComponentExample
      title='Positive'
      description='A button can hint towards a positive consequence.'
      examplePath='elements/Button/Variations/ButtonExamplePositive'
    />
    <ComponentExample
      title='Negative'
      description='A button can hint towards a negative consequence.'
      examplePath='elements/Button/Variations/ButtonExampleNegative'
    />
    <ComponentExample
      title='Fluid'
      description='A button can take the width of its container.'
      examplePath='elements/Button/Variations/ButtonExampleFluid'
    />
    <ComponentExample
      title='Circular'
      description='A button can be circular.'
      examplePath='elements/Button/Variations/ButtonExampleCircular'
    />
    <ComponentExample examplePath='elements/Button/Variations/ButtonExampleCircularSocial' />
    <ComponentExample
      title='Vertically Attached'
      description='A button can be attached to the top or bottom of other content.'
      examplePath='elements/Button/Variations/ButtonExampleVerticallyAttached'
    />
    <ComponentExample examplePath='elements/Button/Variations/ButtonExampleVerticallyAttachedGroup' />
    <ComponentExample
      title='Horizontally Attached'
      description='A button can be attached to the left or right of other content.'
      examplePath='elements/Button/Variations/ButtonExampleHorizontallyAttached'
    />
  </ExampleSection>
)

export default ButtonVariationsExamples
