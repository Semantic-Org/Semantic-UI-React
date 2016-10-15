import React from 'react'
import { Input } from 'semantic-ui-react'

const InputExampleActionLabeledButton = () => (
  <Input
    action={{ color: 'teal', label: 'right', icon: 'copy', content: 'Copy' }}
    defaultValue='http://ww.short.url/c0opq'
  />
)

export default InputExampleActionLabeledButton
