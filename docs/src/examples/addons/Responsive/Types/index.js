import React from 'react'
import { Message } from 'semantic-ui-react'

import ComponentExample from 'docs/app/Components/ComponentDoc/ComponentExample'
import ExampleSection from 'docs/app/Components/ComponentDoc/ExampleSection'

const ResponsiveTypesExamples = () => (
  <ExampleSection title='Types'>
    <ComponentExample
      title='Responsive'
      description='Responsive is always visible.'
      examplePath='addons/Responsive/Types/ResponsiveExampleResponsive'
    >
      <Message info>
        Instead of <code>Grid</code> visibility breakpoints, <code>Responsive</code> doesn't render invisible content.
      </Message>
    </ComponentExample>
    <ComponentExample
      title='Minimal Width'
      description='You can pass minimal width value at which content will be displayed.'
      examplePath='addons/Responsive/Types/ResponsiveExampleMinWidth'
    />
    <ComponentExample
      title='Maximum Width'
      description='You can pass maximum width value at which content will be displayed.'
      examplePath='addons/Responsive/Types/ResponsiveExampleMaxWidth'
    />
    <ComponentExample
      title='Mixed'
      description='You can pass minimal and maximum width value at which content will be displayed.'
      examplePath='addons/Responsive/Types/ResponsiveExampleMixed'
    />
    <ComponentExample
      title='Content'
      description='Responsive can contain different content.'
      examplePath='addons/Responsive/Types/ResponsiveExampleContent'
    />
  </ExampleSection>
)

export default ResponsiveTypesExamples
