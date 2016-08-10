import React from 'react'
import { Message, Icon } from 'stardust'

const MessageIconExample = () => (
  <Message icon>
    <Icon name='circle notched' loading />
    <Message.Content>
      <Message.Header>Just one second</Message.Header>
      We are fetching that content for you.
    </Message.Content>
  </Message>
)

export default MessageIconExample
