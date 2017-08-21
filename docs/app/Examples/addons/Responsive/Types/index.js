import React from 'react'
import { Message } from 'semantic-ui-react'

import ComponentExample from 'docs/app/Components/ComponentDoc/ComponentExample'
import ExampleSection from 'docs/app/Components/ComponentDoc/ExampleSection'

const ResponsiveTypesExamples = () => (
  <ExampleSection title='Types'>
    <ComponentExample
      title='Responsive'
      description='Responsive can appear only for a specific device or screen sizes.'
      examplePath='addons/Responsive/Types/ResponsiveExampleResponsive'
    >
      <Message info>
        Instead of <code>Grid</code> visibility breakpoints, <code>Responsive</code> doesn't render invisible content.
      </Message>
    </ComponentExample>
    <ComponentExample
      title='Multiple'
      description='Responsive can accept multiple sizes.'
      examplePath='addons/Responsive/Types/ResponsiveExampleMultiple'
    />
    <ComponentExample
      title='Content'
      description='Responsive can contain a different content.'
      examplePath='addons/Responsive/Types/ResponsiveExampleContent'
    />
    <ComponentExample
      title='Nested'
      description='Responsive can be nested.'
      examplePath='addons/Responsive/Types/ResponsiveExampleNested'
    />
  </ExampleSection>
)

export default ResponsiveTypesExamples
