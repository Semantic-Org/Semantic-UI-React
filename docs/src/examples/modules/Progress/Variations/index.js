import React from 'react'
import ComponentExample from 'docs/src/components/ComponentDoc/ComponentExample'
import ExampleSection from 'docs/src/components/ComponentDoc/ExampleSection'

const ProgressVariationsExamples = () => (
  <ExampleSection title='Variations'>
    <ComponentExample
      title='Inverted'
      description='A progress bar can have its colors inverted.'
      examplePath='modules/Progress/Variations/ProgressExampleInverted'
    />
    <ComponentExample
      title='Attached'
      description='A progress bar can show progress of an element.'
      examplePath='modules/Progress/Variations/ProgressExampleAttached'
    />
    <ComponentExample
      title='Size'
      description='A progress bar can vary in size.'
      examplePath='modules/Progress/Variations/ProgressExampleSize'
    />
    <ComponentExample
      title='Color'
      description='A progress bar can have different colors.'
      examplePath='modules/Progress/Variations/ProgressExampleColor'
    />
    <ComponentExample
      title='Inverted Color'
      description='These colors can also be inverted for improved contrast on dark backgrounds.'
      examplePath='modules/Progress/Variations/ProgressExampleInvertedColor'
    />
  </ExampleSection>
)

export default ProgressVariationsExamples
