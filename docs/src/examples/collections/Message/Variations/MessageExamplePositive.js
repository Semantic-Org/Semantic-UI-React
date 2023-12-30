import React from 'react'
import { MessageHeader, Message } from 'semantic-ui-react'

const MessageExamplePositive = () => (
  <Message positive>
    <MessageHeader>You are eligible for a reward</MessageHeader>
    <p>
      Go to your <b>special offers</b> page to see now.
    </p>
  </Message>
)

export default MessageExamplePositive
