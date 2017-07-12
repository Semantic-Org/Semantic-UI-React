import React from 'react'
import { Message } from 'semantic-ui-react'

import ComponentExample from 'docs/app/Components/ComponentDoc/ComponentExample'
import ExampleSection from 'docs/app/Components/ComponentDoc/ExampleSection'

const BreakpointTypesExamples = () => (
  <ExampleSection title='Types'>
    <ComponentExample
      title='Breakpoint'
      description='A Breakpoint can appear only for a specific device or screen sizes.'
      examplePath='addons/Breakpoint/Types/BreakpointExampleBreakpoint'
    >
      <Message info>
        Instead of <code>Grid</code> visibility breakpoints, <code>Breakpoint</code> doesn't render invisible content.
      </Message>
    </ComponentExample>
    <ComponentExample
      title='Multiple'
      description='A Breakpoint can accept multiple sizes.'
      examplePath='addons/Breakpoint/Types/BreakpointExampleMultiple'
    />
    <ComponentExample
      title='Content'
      description='A Breakpoint can contain a different content.'
      examplePath='addons/Breakpoint/Types/BreakpointExampleContent'
    />
    <ComponentExample
      title='Nested'
      description='A Breakpoint can be nested.'
      examplePath='addons/Breakpoint/Types/BreakpointExampleNested'
    />
  </ExampleSection>
)

export default BreakpointTypesExamples
