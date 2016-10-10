import React from 'react'
import { Input } from 'semantic-ui-react'

const InputActionLabeledButton = () => (
  <Input
    action={{ color: 'teal', labeled: 'right', icon: 'copy', content: 'Copy' }}
    defaultValue='http://ww.short.url/c0opq'
  />
)

export default InputActionLabeledButton
