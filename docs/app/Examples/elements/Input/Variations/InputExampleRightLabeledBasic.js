import React from 'react'
import { Input } from 'semantic-ui-react'

const InputExampleRightLabeledBasic = () => (
  <Input
    label={{ basic: true, content: 'kg' }}
    labelPosition='right'
    placeholder='Enter weight...'
  />
)

export default InputExampleRightLabeledBasic
