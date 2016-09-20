import React from 'react'
import { Button, Select, Input } from 'stardust'

const options = [
  { value: 'all', text: 'All' },
  { value: 'articles', text: 'Articles' },
  { value: 'products', text: 'Products' },
]

const InputAction = () => (
  <Input className='left icon action' icon='search' placeholder='Search...'>
    <Select compact options={options} defaultValue='articles' />
    <Button type='submit'>Search</Button>
  </Input>
)

export default InputAction
