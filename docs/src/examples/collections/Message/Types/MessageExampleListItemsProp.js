import React from 'react'
import { MessageList, MessageHeader, Message } from 'semantic-ui-react'

const items = [
  'You can now have cover images on blog pages',
  'Drafts will now auto-save while writing',
]

const MessageExampleListItemsProp = () => (
  <Message>
    <MessageHeader>New Site Features</MessageHeader>
    <MessageList items={items} />
  </Message>
)

export default MessageExampleListItemsProp
