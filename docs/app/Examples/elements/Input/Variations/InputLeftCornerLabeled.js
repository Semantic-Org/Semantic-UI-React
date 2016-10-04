import React from 'react'
import { Input } from 'semantic-ui-react'

const InputLeftCornerLabeled = () => (
  <Input
    label={{ icon: 'asterisk' }}
    labelPosition='left corner'
    placeholder='Search...'
  />
)

export default InputLeftCornerLabeled
