import React from 'react'
import { Icon, Input } from 'stardust'

const InputIconChild = () => (
  <div>
    <Input icon>
      <input placeholder='Search...' />
      <Icon name='search' />
    </Input>
    <br />
    <br />
    <Input iconPosition='left'>
      <Icon name='at' />
      <input placeholder='Email' />
    </Input>
  </div>
)

export default InputIconChild
