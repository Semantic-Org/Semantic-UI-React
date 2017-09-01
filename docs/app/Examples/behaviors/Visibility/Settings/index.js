import React from 'react'

import ComponentExample from 'docs/app/Components/ComponentDoc/ComponentExample'
import ExampleSection from 'docs/app/Components/ComponentDoc/ExampleSection'

const VisibilityExample = () => (
  <ExampleSection title='Settings'>
    <ComponentExample
      title='Fire on mount'
      description='Fires callbacks immediately after mount.'
      examplePath='behaviors/Visibility/Settings/VisibilityExampleFireOnMount'
    />
    <ComponentExample
      title='Callback frequency'
      description='You can change the callback frequency with `once` and `continuous` settings.'
      examplePath='behaviors/Visibility/Settings/CallbackFrequencyExample'
    />
    <ComponentExample
      title='Grouped callbacks'
      description='You can specify callbacks that occur after different percentages or pixels of an element are passed.'
      examplePath='behaviors/Visibility/Settings/GroupedCallbacksExample'
    />
  </ExampleSection>
)

export default VisibilityExample
