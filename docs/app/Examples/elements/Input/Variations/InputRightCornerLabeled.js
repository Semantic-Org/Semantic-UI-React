import React from 'react'
import { Input } from 'stardust'

const InputLeftCornerLabeled = () => (
  <Input
    label={{ icon: 'asterisk' }}
    labelPosition='right corner'
    placeholder='Search...'
  />
)

export default InputLeftCornerLabeled
