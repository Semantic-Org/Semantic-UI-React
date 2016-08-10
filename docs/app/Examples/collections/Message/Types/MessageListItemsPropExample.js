import React from 'react'
import { Message } from 'stardust'

const items = [
  'You can now have cover images on blog pages',
  'Drafts will now auto-save while writing',
]

const MessageListItemsPropExample = () => (
  <Message>
    <Message.Header>New Site Features</Message.Header>
    <Message.List items={items} />
  </Message>
)

export default MessageListItemsPropExample
