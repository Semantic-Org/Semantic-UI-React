import React from 'react'
import ComponentExample from 'docs/src/components/ComponentDoc/ComponentExample'
import ExampleSection from 'docs/src/components/ComponentDoc/ExampleSection'

const ProgressTypesExamples = () => (
  <ExampleSection title='Types'>
    <ComponentExample
      title='Standard'
      description='A standard progress bar.'
      examplePath='modules/Progress/Types/ProgressExampleStandard'
    />
    <ComponentExample
      title='Indicating'
      description='An indicating progress bar visually indicates the current level of progress of a task.'
      examplePath='modules/Progress/Types/ProgressExampleIndicating'
    />
    <ComponentExample
      title='Auto Success'
      description='A progress bar can automatically trigger the success state when progress completes.'
      examplePath='modules/Progress/Types/ProgressExampleAutoSuccess'
    />
  </ExampleSection>
)

export default ProgressTypesExamples
