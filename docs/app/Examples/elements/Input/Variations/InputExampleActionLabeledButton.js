import React from 'react'
import { Input } from 'stardust'

const InputExampleActionLabeledButton = () => (
  <Input
    action={{ color: 'teal', labeled: 'right', icon: 'copy', content: 'Copy' }}
    defaultValue='http://ww.short.url/c0opq'
  />
)

export default InputExampleActionLabeledButton
