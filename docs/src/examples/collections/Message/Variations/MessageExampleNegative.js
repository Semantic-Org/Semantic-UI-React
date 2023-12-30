import React from 'react'
import { MessageHeader, Message } from 'semantic-ui-react'

const MessageExampleNegative = () => (
  <Message negative>
    <MessageHeader>We're sorry we can't apply that discount</MessageHeader>
    <p>That offer has expired</p>
  </Message>
)

export default MessageExampleNegative
