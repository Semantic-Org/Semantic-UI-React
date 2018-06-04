import React from 'react'

import ComponentExample from 'docs/src/components/ComponentDoc/ComponentExample'
import ExampleSection from 'docs/src/components/ComponentDoc/ExampleSection'

const RefTypesExamples = () => (
  <ExampleSection title='Types'>
    <ComponentExample
      title='Ref'
      description={
        <span>
          A component exposes the <code>innerRef</code> prop that always returns the DOM node of
          both functional and class component children.
        </span>
      }
      examplePath='addons/Ref/Types/RefExampleRef'
    />
  </ExampleSection>
)

export default RefTypesExamples
