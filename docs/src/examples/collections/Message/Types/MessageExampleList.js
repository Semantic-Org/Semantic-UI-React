import React from 'react'
import { Message } from 'semantic-ui-react'

const MessageExampleList = () => (
  <Message>
    <Message.Header>New Site Features</Message.Header>
    <Message.List>
      <Message.Item>You can now have cover images on blog pages</Message.Item>
      <Message.Item>Drafts will now auto-save while writing</Message.Item>
    </Message.List>
  </Message>
)

export default MessageExampleList
