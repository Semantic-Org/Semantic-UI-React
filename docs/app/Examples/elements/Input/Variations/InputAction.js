import React from 'react'
import { Button, Select, Input } from 'stardust'

const options = [
  { value: 'all', text: 'All' },
  { value: 'articles', text: 'Articles' },
  { value: 'products', text: 'Products' },
]

const actions = [
  <Select compact options={options} defaultValue='articles' />,
  <Button type='submit'>Search</Button>,
]

const InputAction = () => (
  <Input actions={actions} actionPosition='left' icon='search' placeholder='Search...' />
)

export default InputAction
