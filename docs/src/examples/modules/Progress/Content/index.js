import React from 'react'
import ComponentExample from 'docs/src/components/ComponentDoc/ComponentExample'
import ExampleSection from 'docs/src/components/ComponentDoc/ExampleSection'

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
      description='A progress label can also be defined via props.'
      examplePath='modules/Progress/Content/ProgressExampleLabelProp'
    />
    <ComponentExample
      description='A progress element display progress as a percent.'
      examplePath='modules/Progress/Content/ProgressExampleProgressPercent'
    />
    <ComponentExample
      description='A progress element display progress as a ratio.'
      examplePath='modules/Progress/Content/ProgressExampleProgressRatio'
    />
    <ComponentExample
      description='A progress element display progress as a value.'
      examplePath='modules/Progress/Content/ProgressExampleProgressValue'
    />
    <ComponentExample
      description='A progress element display progress as a value, with the width determined as a % of total.'
      examplePath='modules/Progress/Content/ProgressExampleProgressValuePercentageOfTotal'
    />
  </ExampleSection>
)

export default ProgressContentExamples
