import React from 'react'
import ComponentExample from 'docs/app/Components/ComponentDoc/ComponentExample'
import ExampleSection from 'docs/app/Components/ComponentDoc/ExampleSection'

const VisibilityExample = () => (
  <ExampleSection>
    <ComponentExample
      title='How To Use'
      description='An example of Visibility'
      examplePath='behaviours/Visibility/VisibilityExample'
    />
    <ComponentExample
      title='How To Use'
      description='You can change callback frequency by changing `once` and `continuous`'
      examplePath='behaviours/Visibility/CallbackFrequencyExample'
    />
  </ExampleSection>
)

export default VisibilityExample
