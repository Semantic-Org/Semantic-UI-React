import React from 'react'
import { Message } from 'stardust'

const list = [
  'You can now have cover images on blog pages',
  'Drafts will now auto-save while writing',
]

const MessageListPropExample = () => (
  <Message
    header='New Site Features'
    list={list}
  />
)

export default MessageListPropExample
