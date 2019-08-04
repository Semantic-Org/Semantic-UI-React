import React from 'react'
import { Message } from 'semantic-ui-react'

const list = [
  'You can now have cover images on blog pages',
  'Drafts will now auto-save while writing',
]

const MessageExampleListProp = () => (
  <Message header='New Site Features' list={list} />
)

export default MessageExampleListProp
