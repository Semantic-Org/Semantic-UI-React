import React from 'react'
import ComponentExample from 'docs/app/Components/ComponentDoc/ComponentExample'
import ExampleSection from 'docs/app/Components/ComponentDoc/ExampleSection'

const VisibilityExample = () => (
  <ExampleSection title='Settings'>
    <ComponentExample
      title='Callback frequency'
      description='You can change the callback frequency with `once` and `continuous` settings'
      examplePath='behaviours/Visibility/Settings/CallbackFrequencyExample'
    />
    <ComponentExample
      title='Grouped callbacks'
      description='You can specify a collection of callbacks that occur after different percentages or pixels of an element are passed'
      examplePath='behaviours/Visibility/Settings/GroupedCallbacksExample'
    />
  </ExampleSection>
)

export default VisibilityExample
