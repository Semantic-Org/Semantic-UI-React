import React from 'react'
import { Icon, Input } from 'semantic-ui-react'

const InputExampleIconChild = () => (
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

export default InputExampleIconChild
