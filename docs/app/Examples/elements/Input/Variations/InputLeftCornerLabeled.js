import React from 'react'
import { Input } from 'stardust'

const InputLeftCornerLabeled = () => (
  <Input
    label={{ icon: 'asterisk' }}
    labelPosition='left corner'
    placeholder='Search...'
  />
)

export default InputLeftCornerLabeled
