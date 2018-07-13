import React from 'react'

import ComponentExample from 'docs/app/Components/ComponentDoc/ComponentExample'
import ExampleSection from 'docs/app/Components/ComponentDoc/ExampleSection'

const CheckboxUsageExamples = () => (
  <ExampleSection title='Usage'>
    <ComponentExample
      title='Controlled'
      description='You can control the checked state of a checkbox.'
      examplePath='modules/Checkbox/Usage/CheckboxExampleRemoteControl'
    />

    <ComponentExample
      title='DOM Comparison'
      description='A checkbox behaves like a native DOM checkbox, including keyboard accessibility.'
      examplePath='modules/Checkbox/Usage/CheckboxExampleDOMComparison'
    />
  </ExampleSection>
)

export default CheckboxUsageExamples
