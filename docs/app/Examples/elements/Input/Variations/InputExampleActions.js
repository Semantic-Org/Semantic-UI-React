import React from 'react'
import { Button, Select, Input } from 'semantic-ui-react'

const items = [
  { key: 'all', text: 'All', value: 'all' },
  { key: 'articles', text: 'Articles', value: 'articles' },
  { key: 'products', text: 'Products', value: 'products' },
]

const InputExampleActions = () => (
  <Input type='text' placeholder='Search...' action>
    <input />
    <Select compact items={items} defaultValue='articles' />
    <Button type='submit'>Search</Button>
  </Input>
)

export default InputExampleActions
