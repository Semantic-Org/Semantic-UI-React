import React from 'react'
import { Message } from 'semantic-ui-react'

const MessageExampleError = () => (
  <Message
    error
    header='There was some errors with your submission'
    list={[
      'You must include both a upper and lower case letters in your password.',
      'You need to select your home country.',
    ]}
  />
)

export default MessageExampleError
