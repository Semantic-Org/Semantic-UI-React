import React from 'react'
import { Message } from 'semantic-ui-react'

const MessageExampleWarningProps = () => (
  <Message
    warning
    header='You must register before you can do that!'
    content='Visit our registration page, then try again.'
  />
)

export default MessageExampleWarningProps
