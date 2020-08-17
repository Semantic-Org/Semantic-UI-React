import React from 'react'

import ComponentExample from 'docs/src/components/ComponentDoc/ComponentExample'
import ExampleSection from 'docs/src/components/ComponentDoc/ExampleSection'

const RefTypesExamples = () => (
  <ExampleSection title='Types'>
    <ComponentExample
      title='Ref'
      description={
        <span>
          A component exposes the <code>innerRef</code> prop that always returns
          the DOM node of both functional and class component children.
        </span>
      }
      examplePath='addons/Ref/Types/RefExampleRef'
    />
    <ComponentExample
      title='Forward Ref'
      description={
        <span>
          <code>React.forwardRef()</code> API is also handled by this component.
        </span>
      }
      examplePath='addons/Ref/Types/RefForwardingExample'
    />
  </ExampleSection>
)

export default RefTypesExamples
