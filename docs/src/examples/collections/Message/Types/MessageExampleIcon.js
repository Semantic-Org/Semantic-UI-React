import React from 'react'
import { MessageHeader, MessageContent, Message, Icon } from 'semantic-ui-react'

const MessageExampleIcon = () => (
  <Message icon>
    <Icon name='circle notched' loading />
    <MessageContent>
      <MessageHeader>Just one second</MessageHeader>
      We are fetching that content for you.
    </MessageContent>
  </Message>
)

export default MessageExampleIcon
