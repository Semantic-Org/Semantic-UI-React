import React from 'react'
import { Icon } from 'semantic-ui-react'
import ExampleSection from 'docs/src/components/ComponentDoc/ExampleSection'
import ComponentExample from 'docs/src/components/ComponentDoc/ComponentExample'

const MessageTypesExamples = () => (
  <ExampleSection title='Types'>
    <ComponentExample
      title='Message'
      description='A basic message.'
      examplePath='collections/Message/Types/MessageExampleMessage'
    />
    <ComponentExample
      description='A basic message built with props.'
      examplePath='collections/Message/Types/MessageExampleMessageProps'
    />
    <ComponentExample
      title='List Message'
      description='A message with a list.'
      examplePath='collections/Message/Types/MessageExampleList'
    />
    <ComponentExample
      description='Pass array of items to the Message list prop.'
      examplePath='collections/Message/Types/MessageExampleListProp'
    />
    <ComponentExample
      description='Pass an array of items to the MessageList items prop.'
      examplePath='collections/Message/Types/MessageExampleListItemsProp'
    />
    <ComponentExample
      title='Icon Message'
      description='A message can contain an icon.'
      examplePath='collections/Message/Types/MessageExampleIcon'
    />
    <ComponentExample
      description='You can pass an Icon name to the Message icon prop.'
      examplePath='collections/Message/Types/MessageExampleIconProp'
    />
    <ComponentExample
      title='Dismissible Block'
      description='A message that the user can choose to hide.'
      examplePath='collections/Message/Types/MessageExampleDismissibleBlock'
    >
      <strong>
        <Icon name='warning circle' />
        Dismissible blocks do not automatically close. Use the{' '}
        <code>onDismiss</code> callback to remove the message.
      </strong>
    </ComponentExample>
  </ExampleSection>
)

export default MessageTypesExamples
