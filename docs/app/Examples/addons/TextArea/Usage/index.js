import React from 'react'

import ComponentExample from 'docs/app/Components/ComponentDoc/ComponentExample'
import ExampleSection from 'docs/app/Components/ComponentDoc/ExampleSection'

const TextAreaUsageExamples = () => (
  <ExampleSection title='Usage'>
    <ComponentExample
      title='Min Height'
      description='A TextArea can have a minimum height.'
      examplePath='addons/TextArea/Usage/TextAreaExampleMinHeight'
    />

    <ComponentExample
      title='Rows'
      description='A TextArea can have a minimum number of rows.'
      examplePath='addons/TextArea/Usage/TextAreaExampleRows'
    />

    <ComponentExample
      title='Auto Height'
      description='A TextArea can adjust its height to fit its contents.'
      examplePath='addons/TextArea/Usage/TextAreaExampleAutoHeight'
    />
    <ComponentExample
      description='A TextArea can adjust its height to fit its contents and depend on minHeight value.'
      examplePath='addons/TextArea/Usage/TextAreaExampleAutoHeightMinHeight'
    />
    <ComponentExample
      description='A TextArea can adjust its height to fit its contents and depend on rows value.'
      examplePath='addons/TextArea/Usage/TextAreaExampleAutoHeightRows'
    />
  </ExampleSection>
)

export default TextAreaUsageExamples
