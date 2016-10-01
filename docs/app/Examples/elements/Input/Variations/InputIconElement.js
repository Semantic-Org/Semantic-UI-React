import React from 'react'
import { Icon, Input } from 'stardust'

const InputIconElement = () => (
  <Input
    icon={<Icon name='search' inverted circular link />}
    placeholder='Search...'
  />
)

export default InputIconElement
