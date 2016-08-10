import React from 'react'
import { Message } from 'stardust'

const MessageNegativeExample = () => (
  <Message negative>
    <Message.Header>We're sorry we can't apply that discount</Message.Header>
    <p>That offer has expired</p>
  </Message>
)

export default MessageNegativeExample
