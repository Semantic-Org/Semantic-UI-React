import React from 'react'
import { Button, Select, Input } from 'stardust'

const options = [
  { value: 'all', text: 'All' },
  { value: 'articles', text: 'Articles' },
  { value: 'products', text: 'Products' },
]

const actions = [
  <Select childKey='select' compact options={options} defaultValue='articles' />,
  <Button childKey='button' type='submit'>Search</Button>,
]

const InputAction = () => (
  <Input actions={actions} actionsPosition='left' icon='search' placeholder='Search...' />
)

export default InputAction
