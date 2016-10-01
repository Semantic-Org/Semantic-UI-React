import React from 'react'
import { Button, Select, Input } from 'stardust'

const options = [
  { text: 'All', value: 'all' },
  { text: 'Articles', value: 'articles' },
  { text: 'Products', value: 'products' },
]

const InputExampleAction = () => (
  <Input action>
    <input type='text' placeholder='Search...' />
    <Select compact options={options} defaultValue='articles' />
    <Button type='submit'>Search</Button>
  </Input>
)

export default InputExampleAction
