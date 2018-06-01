import React from 'react'
import ExampleSection from 'docs/src/components/ComponentDoc/ExampleSection'
import ComponentExample from 'docs/src/components/ComponentDoc/ComponentExample'

const MessageVariationsExamples = () => (
  <ExampleSection title='Variations'>
    <ComponentExample
      title='Floating'
      description='A message can float above content that it is related to.'
      examplePath='collections/Message/Variations/MessageExampleFloating'
    />
    <ComponentExample
      description='You can also use props to configure the markup.'
      examplePath='collections/Message/Variations/MessageExampleFloatingProps'
    />
    <ComponentExample
      title='Compact'
      description='A message can only take up the width of its content.'
      examplePath='collections/Message/Variations/MessageExampleCompact'
    />
    <ComponentExample
      description='You can also use props to configure the markup.'
      examplePath='collections/Message/Variations/MessageExampleCompactProps'
    />
    <ComponentExample
      title='Attached'
      description='A message can be formatted to attach itself to other content.'
      examplePath='collections/Message/Variations/MessageExampleAttached'
    />
    <ComponentExample
      title='Info'
      description='A message may be formatted to display information.'
      examplePath='collections/Message/Variations/MessageExampleInfo'
    />
    <ComponentExample
      description='You can also use props to configure the markup.'
      examplePath='collections/Message/Variations/MessageExampleInfoProps'
    />
    <ComponentExample
      title='Warning'
      description='A message may be formatted to display warning message.'
      examplePath='collections/Message/Variations/MessageExampleWarning'
    />
    <ComponentExample
      description='You can also use props to configure the markup.'
      examplePath='collections/Message/Variations/MessageExampleWarningProps'
    />
    <ComponentExample
      title='Positive/Success'
      description='A message may be formatted to display a positive message.'
      examplePath='collections/Message/Variations/MessageExamplePositive'
    />
    <ComponentExample
      description='You can also use props to configure the markup.'
      examplePath='collections/Message/Variations/MessageExampleSuccess'
    />
    <ComponentExample
      title='Negative/Error'
      description='A message may be formatted to display a negative message.'
      examplePath='collections/Message/Variations/MessageExampleNegative'
    />
    <ComponentExample
      description='You can also use props to configure the markup.'
      examplePath='collections/Message/Variations/MessageExampleError'
    />
    <ComponentExample
      title='Colored'
      description='A message can be formatted to be different colors.'
      examplePath='collections/Message/Variations/MessageExampleColor'
    />
    <ComponentExample
      title='Size'
      description='A message can have different sizes.'
      examplePath='collections/Message/Variations/MessageExampleSize'
    />
  </ExampleSection>
)

export default MessageVariationsExamples
