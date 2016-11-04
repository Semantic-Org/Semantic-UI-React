import React from 'react'
import { Message } from 'semantic-ui-react'

const items = [
  'You can now have cover images on blog pages',
  'Drafts will now auto-save while writing',
]

const MessageExampleListItemsProp = () => (
  <Message>
    <Message.Header>New Site Features</Message.Header>
    <Message.List items={items} />
  </Message>
)

export default MessageExampleListItemsProp
