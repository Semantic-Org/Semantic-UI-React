import React from 'react'
import { Input, Label } from 'stardust'

const InputLabeled = () => (
  <Input className='labeled' placeholder='mysite.com'>
    <Label>http://</Label>
  </Input>
)

export default InputLabeled
