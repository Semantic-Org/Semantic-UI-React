import React from 'react'
import ComponentExample from 'docs/app/Components/ComponentDoc/ComponentExample'
import ExampleSection from 'docs/app/Components/ComponentDoc/ExampleSection'

const ProgressContentExamples = () => (
  <ExampleSection title='Content'>
    <ComponentExample
      title='Bar'
      description='A progress element can contain a bar visually indicating progress.'
      examplePath='modules/Progress/Content/ProgressExampleBar'
    />
    <ComponentExample
      title='Progress'
      description='A progress bar can contain a text value indicating current progress.'
      examplePath='modules/Progress/Content/ProgressExampleProgress'
    />
    <ComponentExample
      title='Label'
      description='A progress element can contain a label.'
      examplePath='modules/Progress/Content/ProgressExampleLabel'
    />
    <ComponentExample
      description='A progress element can contain a percent label.'
      examplePath='modules/Progress/Content/ProgressExampleLabelPercent'
    />
    <ComponentExample
      description='A progress element can contain a ratio label.'
      examplePath='modules/Progress/Content/ProgressExampleLabelRatio'
    />
  </ExampleSection>
)

export default ProgressContentExamples
