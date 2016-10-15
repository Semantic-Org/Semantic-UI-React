import React from 'react'
import { Input, Label } from 'semantic-ui-react'

const InputRightLeftLabeled = () => (
  <Input labelPosition='right' placeholder='mysite.com'>
    <Label basic>$</Label>
    <input type='text' placeholder='Amount' />
    <Label>.00</Label>
  </Input>
)

export default InputRightLeftLabeled
