import React from 'react'

import { Chat } from 'stardust'

const messages = [
  { key: 1, content: 'Hello', mine: true },
  { key: 2, content: 'Hi' },
  { key: 3, content: "Let's go get some lunch!", mine: true },
  { key: 4, content: 'Sure thing.  I was thinking we should try the new place downtown.' },
]

const ChatExampleShorthand = () => <Chat messages={messages} />

export default ChatExampleShorthand
