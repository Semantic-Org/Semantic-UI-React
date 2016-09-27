import React from 'react'
import { Icon, Input } from 'stardust'

const InputIconChildren = () => (
  <Input icon>
    <Icon name='search' inverted circular link />
    <input placeholder='Search...' />
  </Input>
)

export default InputIconChildren
