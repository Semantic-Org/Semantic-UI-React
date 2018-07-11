import React from 'react'

import { Chat } from 'stardust'

const ChatExample = () => (
  <Chat>
    <Chat.Message mine>Hello</Chat.Message>

    <Chat.Message>Hi</Chat.Message>

    <Chat.Message mine>Let's go get some lunch!</Chat.Message>

    <Chat.Message>Sure thing. I was thinking we should try the new place downtown.</Chat.Message>
  </Chat>
)

export default ChatExample
