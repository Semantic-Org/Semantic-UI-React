import React from 'react'
import { Input } from 'stardust'

const InputRightLabeledBasic = () => (
  <Input
    label={{ basic: true, content: 'kg' }}
    labelPosition='right'
    placeholder='Enter weight...'
  />
)

export default InputRightLabeledBasic
