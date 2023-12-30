import React from 'react'
import { MessageHeader, Message } from 'semantic-ui-react'

const MessageExampleWarning = () => (
  <Message warning>
    <MessageHeader>You must register before you can do that!</MessageHeader>
    <p>Visit our registration page, then try again.</p>
  </Message>
)

export default MessageExampleWarning
