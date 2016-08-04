import React from 'react'
import { Message } from 'stardust'

const MessageSuccessExample = () => (
  <Message
    success
    header='Your user registration was successful'
    content='You may now log-in with the username you have chosen'
  />
)

export default MessageSuccessExample
