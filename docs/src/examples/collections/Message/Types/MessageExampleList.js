import React from 'react'
import {
  MessageItem,
  MessageList,
  MessageHeader,
  Message,
} from 'semantic-ui-react'

const MessageExampleList = () => (
  <Message>
    <MessageHeader>New Site Features</MessageHeader>
    <MessageList>
      <MessageItem>You can now have cover images on blog pages</MessageItem>
      <MessageItem>Drafts will now auto-save while writing</MessageItem>
    </MessageList>
  </Message>
)

export default MessageExampleList
