import React from 'react'
import ExampleSection from 'docs/app/Components/ComponentDoc/ExampleSection'
import ComponentExample from 'docs/app/Components/ComponentDoc/ComponentExample'

import { Icon } from 'stardust'

const MessageExamples = () => (
  <div>
    <ExampleSection title='Types'>
      <ComponentExample
        title='Message'
        description='A basic message'
        examplePath='collections/Message/Types/MessageMessageExample'
      />
      <ComponentExample examplePath='collections/Message/Types/MessageMessagePropsExample' />
      <ComponentExample
        title='List Message'
        description='A message with a list'
        examplePath='collections/Message/Types/MessageListExample'
      />
      <ComponentExample examplePath='collections/Message/Types/MessageListPropExample' />
      <ComponentExample examplePath='collections/Message/Types/MessageListItemsPropExample' />
      <ComponentExample
        title='Icon Message'
        description='A message can contain an icon'
        examplePath='collections/Message/Types/MessageIconExample'
      />
      <ComponentExample examplePath='collections/Message/Types/MessageIconPropsExample' />
      <ComponentExample
        title='Dismissable Block'
        description='A message that the user can choose to hide'
        examplePath='collections/Message/Types/MessageDismissableBlockExample'
      >
        <strong>
          <Icon name='warning circle' />
          Dismissable blocks do not automatically close.
          Use the <code>onDismiss</code> callback to remove the message.
        </strong>
      </ComponentExample>
    </ExampleSection>
    <ExampleSection title='States'>
      <ComponentExample
        title='Hidden'
        description='A message can be hidden'
        examplePath='collections/Message/States/MessageHiddenExample'
      />
      <ComponentExample
        title='Visible'
        description='A message can be set to visible to force itself to be shown'
        examplePath='collections/Message/States/MessageVisibleExample'
      />
    </ExampleSection>
    <ExampleSection title='Variations'>
      <ComponentExample
        title='Floating'
        description='A message can float above content that it is related to'
        examplePath='collections/Message/Variations/MessageFloatingExample'
      />
      <ComponentExample examplePath='collections/Message/Variations/MessageFloatingPropsExample' />
      <ComponentExample
        title='Compact'
        description='A message can only take up the width of its content'
        examplePath='collections/Message/Variations/MessageCompactExample'
      />
      <ComponentExample examplePath='collections/Message/Variations/MessageCompactPropsExample' />
      <ComponentExample
        title='Attached'
        description='A message can be formatted to attach itself to other content'
        examplePath='collections/Message/Variations/MessageAttachedExample'
      />
      <ComponentExample
        title='Info'
        description='A message may be formatted to display information'
        examplePath='collections/Message/Variations/MessageInfoExample'
      />
      <ComponentExample examplePath='collections/Message/Variations/MessageInfoPropsExample' />
      <ComponentExample
        title='Warning'
        description='A message may be formatted to display warning message'
        examplePath='collections/Message/Variations/MessageWarningExample'
      />
      <ComponentExample examplePath='collections/Message/Variations/MessageWarningPropsExample' />
      <ComponentExample
        title='Positive/Success'
        description='A message may be formatted to display a positive message'
        examplePath='collections/Message/Variations/MessagePositiveExample'
      />
      <ComponentExample examplePath='collections/Message/Variations/MessageSuccessExample' />
      <ComponentExample
        title='Negative/Error'
        description='A message may be formatted to display a negative message'
        examplePath='collections/Message/Variations/MessageNegativeExample'
      />
      <ComponentExample examplePath='collections/Message/Variations/MessageErrorExample' />
      <ComponentExample
        title='Colored'
        description='A message can be formatted to be different colors'
        examplePath='collections/Message/Variations/MessageColorExample'
      />
      <ComponentExample
        title='Size'
        description='A message can have different sizes'
        examplePath='collections/Message/Variations/MessageSizeExample'
      />
    </ExampleSection>
  </div>
)

export default MessageExamples
