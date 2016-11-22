import React from 'react'
import { Button, Select, Input } from 'semantic-ui-react'

const options = [
  { text: 'All', value: 'all' },
  { text: 'Articles', value: 'articles' },
  { text: 'Products', value: 'products' },
]

const InputExampleActions = () => (
  <Input type='text' placeholder='Search...' action>
    <input />
    <Select compact options={options} defaultValue='articles' />
    <Button type='submit'>Search</Button>
  </Input>
)

export default InputExampleActions
